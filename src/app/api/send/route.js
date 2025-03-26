import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Check if method is POST
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
      );
    }

    // Parse request body
    const body = await req.json();
    
    // Validate body exists and is an object
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // Create FormData
    const formData = new FormData();
    for (const [key, value] of Object.entries(body)) {
      formData.append(key, String(value)); // Convert values to strings
    }

    // Validate access key exists
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      throw new Error("Web3Forms access key not configured");
    }
    formData.append("access_key", accessKey);

    // Make API request
    const response = await fetch("https://api.web3forms.com/submit", {  // Updated URL to correct endpoint
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();
    console.log("API Response:", result);

    // Check if Web3Forms request was successful
    if (!response.ok) {
      return NextResponse.json(
        { error: result.message || "Form submission failed" },
        { status: response.status }
      );
    }

    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : "Internal Server Error",
        success: false 
      },
      { status: 500 }
    );
  }
}

// Optional: Add config for Next.js
export const config = {
  api: {
    bodyParser: true,
  },
};