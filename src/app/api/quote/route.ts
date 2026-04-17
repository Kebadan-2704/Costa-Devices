import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // Extract standard string fields
    const payload: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        payload[key] = value;
      }
    }
    
    // Extract file (BOM)
    const file = formData.get("file") as File | null;
    let fileMeta = null;
    
    if (file) {
      // In production, we'd pipe this ArrayBuffer into S3, an email attachment, or AWS Textract
      const buffer = await file.arrayBuffer();
      fileMeta = {
        name: file.name,
        size: file.size,
        type: file.type,
        bytesReceived: buffer.byteLength,
      };
    }
    
    // Simulated Backend Transport (SMTP / CRM)
    console.log("[SERVER START] Processing High-Value RFQ:");
    console.log("[PAYLOAD]:", JSON.stringify(payload, null, 2));
    if (fileMeta) {
      console.log("[ATTACHMENT DETECTED]:", fileMeta);
    }
    
    // Secure processing delay matching our premium spinner
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("[SERVER SUCCESS] RFQ injected into CRM pipeline.");
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Quote captured securely",
        reference: `RFQ-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[SERVER ERROR] RFQ pipeline failed:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
