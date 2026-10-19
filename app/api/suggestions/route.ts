
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, suggestion } = body;

    if (
      typeof suggestion !== "string" ||
      suggestion.trim().length < 5 ||
      suggestion.length > 1000 ||
      typeof name !== "string" ||
      name.length > 100
    ) {
      return NextResponse.json(
        { message: "Please enter valid suggestion details." },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER;
    const password = process.env.GMAIL_APP_PASSWORD;
    const receiver = process.env.SUGGESTION_RECEIVER;

    if (!user || !password || !receiver) {
      console.error("Suggestion email environment variables are missing.");

      return NextResponse.json(
        { message: "Email settings are missing on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: user,
      to: receiver,
      replyTo: user,
      subject: "New Paradise Resort Guest Suggestion",
      text: `Name: ${name.trim() || "Not provided"}

Suggestion:
${suggestion.trim()}`,
    });

    return NextResponse.json({
      message: "Your suggestion has been sent successfully!",
    });
  } catch (error) {
    console.error("Suggestion email failed:", error);

    return NextResponse.json(
      { message: "Could not send your suggestion. Please try again." },
      { status: 500 }
    );
  }
}
