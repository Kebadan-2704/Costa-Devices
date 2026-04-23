import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Web3Forms Integration
    // In production, set WEB3FORMS_ACCESS_KEY in your .env.local file
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);
    formData.append("subject", "New High-Value RFQ from Costa Devices Platform");
    formData.append("from_name", "Costa Devices RFQ System");
    
    // Optional: Extract file meta for logging
    const file = formData.get("file") as File | null;
    let fileMeta = null;
    if (file) {
      fileMeta = { name: file.name, size: file.size, type: file.type };
    }
    
    console.log("[SERVER START] Dispatching RFQ to Web3Forms...");
    if (fileMeta) console.log("[ATTACHMENT DETECTED]:", fileMeta);
    
    // Forward the exact FormData directly to Web3Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      // Web3Forms requires no specific headers for FormData, browser/fetch handles the boundary
    });
    
    const data = await response.json();
    
    if (!response.ok || !data.success) {
      throw new Error(data.message || "Failed to submit to Web3Forms");
    }
    
    console.log("[SERVER SUCCESS] RFQ submitted to Web3Forms.");
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Quote captured securely and emailed.",
        reference: `RFQ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[SERVER ERROR] RFQ pipeline failed:", error.message || error);
    return NextResponse.json(
      { success: false, error: "Failed to dispatch email. Check Web3Forms API key." },
      { status: 500 }
    );
  }
}
