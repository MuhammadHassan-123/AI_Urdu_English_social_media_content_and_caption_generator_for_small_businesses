import { NextResponse } from "next/server";
import { ai } from "@/services/gemini";
import { buildPrompt } from "@/lib/prompts";

export async function POST(request: Request) {
  try {
    // Get data from frontend
    const body = await request.json();

    // Build AI prompt
    const prompt = buildPrompt(body);

    // Check API key
    console.log(
      process.env.GEMINI_API_KEY
        ? "✅ API Key Loaded"
        : "❌ API Key Missing"
    );

    // Call Gemini
    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: prompt,
    });

    console.log("✅ Gemini Response Received");

    // Get AI response as text
    const text = response.text ?? "";

    console.log("Raw Response:\n", text);

    // Remove markdown if Gemini returns ```json
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Convert JSON string into JavaScript object
    const result = JSON.parse(cleanedText);

    // Send response back to frontend
    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("❌ Gemini Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred.",
      },
      {
        status: 500,
      }
    );
  }
}