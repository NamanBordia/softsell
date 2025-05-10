import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Please provide a message' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Chat service is currently unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for SoftSell, a software resale platform. You help users with questions about selling their software licenses, pricing, and the platform's features. Keep your responses concise and professional."
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
      });

      if (!completion.choices[0]?.message?.content) {
        throw new Error('No response from AI service');
      }

      return NextResponse.json({
        message: completion.choices[0].message.content
      });
    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      return NextResponse.json(
        { error: 'Unable to process your request at the moment. Please try again later.' },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
} 