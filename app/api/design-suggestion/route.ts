import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jewelryType, metal, budget, notes } = body;

    const prompt = `
You are a luxury jewelry designer.

Create a premium custom ${jewelryType} design using ${metal}.
Budget range: ${budget}.

Client notes:
${notes || "No additional notes"}

Describe:
- Overall style
- Stone shape and setting
- Band or structure
- Why it feels luxurious

Keep it elegant and concise.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({
      suggestion: response.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "AI generation failed" },
      { status: 500 }
    );
  }
}
