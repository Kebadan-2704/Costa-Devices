import { NextResponse } from "next/server";

// ── Input Sanitization ──
function sanitize(input: string, maxLength = 1000): string {
  return input
    .slice(0, maxLength)
    .replace(/[<>]/g, "") // Strip HTML angle brackets
    .replace(/javascript:/gi, "") // Strip JS protocol
    .replace(/on\w+=/gi, "") // Strip inline event handlers
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function POST(request: Request) {
  try {
    // ── Validate environment ──
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error("[SERVER ERROR] WEB3FORMS_ACCESS_KEY environment variable is not configured.");
      return NextResponse.json(
        { success: false, error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    const contentType = request.headers.get("content-type") || "";

    let payload: Record<string, string>;
    let fileAttached = false;

    // Handle FormData (from Request Quote with file upload)
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();

      // ── Honeypot check (bot trap) ──
      const honeypot = formData.get("_gotcha") as string;
      if (honeypot) {
        // Silently discard bot submissions
        return NextResponse.json({ success: true, message: "Lead captured successfully" }, { status: 200 });
      }

      const name = sanitize((formData.get("name") as string) || "", 200);
      const company = sanitize((formData.get("company") as string) || "", 200);
      const email = sanitize((formData.get("email") as string) || "", 254);
      const subject = sanitize((formData.get("subject") as string) || "BOM / RFQ Submission", 300);
      const message = sanitize((formData.get("message") as string) || "", 5000);

      if (!name || !email || !message) {
        return NextResponse.json({ success: false, error: "Name, email, and message are required." }, { status: 400 });
      }
      if (!isValidEmail(email)) {
        return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
      }

      payload = {
        name,
        company,
        email,
        subject,
        message,
        access_key: accessKey,
        from_name: "Costa Devices BOM Submission",
      };
      
      const file = formData.get("file") as File | null;
      if (file && file.size > 0) {
        const safeFilename = sanitize(file.name, 255);
        payload.message += `\n\n--- Attached File ---\nFilename: ${safeFilename}\nSize: ${(file.size / 1024).toFixed(1)} KB\nType: ${file.type}\n\nNote: File was uploaded via the website. Please contact the customer to receive the file directly if needed.`;
        fileAttached = true;
      }
    }
    // Handle JSON (from Contact page)
    else {
      const body = await request.json();

      // ── Honeypot check ──
      if (body._gotcha) {
        return NextResponse.json({ success: true, message: "Lead captured successfully" }, { status: 200 });
      }

      const name = sanitize(body.name || "", 200);
      const email = sanitize(body.email || "", 254);
      const message = sanitize(body.message || "", 5000);
      const subject = sanitize(body.subject || "New General Inquiry from Costa Devices Platform", 300);
      const company = sanitize(body.company || "", 200);

      if (!name || !email || !message) {
        return NextResponse.json({ success: false, error: "Name, email, and message are required." }, { status: 400 });
      }
      if (!isValidEmail(email)) {
        return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
      }

      payload = {
        name,
        company,
        email,
        subject,
        message,
        access_key: accessKey,
        from_name: "Costa Devices Contact Form",
      };
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to submit to Web3Forms");
    }

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("[SERVER ERROR] Failed to process Contact Lead:", errorMessage);
    return NextResponse.json(
      { success: false, error: "Failed to submit your inquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
