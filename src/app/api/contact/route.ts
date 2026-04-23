import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    
    const payload = {
      ...body,
      access_key: accessKey,
      subject: "New General Inquiry from Costa Devices Platform",
      from_name: "Costa Devices Contact Form"
    };
    
    console.log("[SERVER START] Dispatching Contact Lead to Web3Forms...");
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
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
  } catch (error: any) {
    console.error("[SERVER ERROR] Failed to process Contact Lead:", error.message || error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch email. Check Web3Forms API key." },
      { status: 500 }
    );
  }
}
