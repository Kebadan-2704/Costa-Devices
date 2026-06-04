import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

    let payload: Record<string, string>;
    let fileAttached = false;

    // Handle FormData (from Request Quote with file upload)
    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      payload = {
        name: (formData.get("name") as string) || "",
        company: (formData.get("company") as string) || "",
        email: (formData.get("email") as string) || "",
        subject: (formData.get("subject") as string) || "BOM / RFQ Submission",
        message: (formData.get("message") as string) || "",
        access_key: accessKey,
        from_name: "Costa Devices BOM Submission",
      };
      
      const file = formData.get("file") as File | null;
      if (file && file.size > 0) {
        payload.message += `\n\n--- Attached File ---\nFilename: ${file.name}\nSize: ${(file.size / 1024).toFixed(1)} KB\nType: ${file.type}\n\nNote: File was uploaded via the website. Please contact the customer to receive the file directly if needed.`;
        fileAttached = true;
      }
    }
    // Handle JSON (from Contact page)
    else {
      const body = await request.json();
      payload = {
        ...body,
        access_key: accessKey,
        subject: body.subject || "New General Inquiry from Costa Devices Platform",
        from_name: "Costa Devices Contact Form",
      };
    }

    console.log(`[SERVER START] Dispatching ${fileAttached ? "BOM/RFQ" : "Contact"} Lead to Web3Forms...`);

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

    console.log("[SERVER SUCCESS] Contact Lead emailed successfully.");

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("[SERVER ERROR] Failed to process Contact Lead:", errorMessage);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch email. Check Web3Forms API key." },
      { status: 500 }
    );
  }
}
