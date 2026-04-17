import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a production environment, this is where we would securely dispatch the
    // email to the sales queue via Resend, SendGrid, or Nodemailer.
    // e.g. await resend.emails.send({ ... })
    
    // For now, we simulate the secure processing delay & server-side logging
    console.log("[SERVER START] Processing new Contact Lead:");
    console.log(JSON.stringify(body, null, 2));
    
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate SMTP delay
    
    console.log("[SERVER SUCCESS] Contact Lead processed successfully.");
    
    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[SERVER ERROR] Failed to process Contact Lead:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
