import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    console.log(name+ " FROM THE SERVER")

    if (!name || !email || !message) {
        return NextResponse.json({ error: "All fields required!" }, { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `
        });
        return NextResponse.json({ success: true });

    } catch (error) {
        console.log(error)
    }
}