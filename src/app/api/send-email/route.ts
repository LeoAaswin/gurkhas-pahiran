// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    // Parse the request body
    const { name, email, subject, message } = await request.json()

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt( process.env.EMAIL_PORT || '587' ),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: process.env.NODE_ENV === 'production'
        }
    })

    try {
        // Send email
        await transporter.sendMail({
            from: `"${process.env.EMAIL_FROM_NAME || 'Contact Form'}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email, // Set reply-to as the sender's email
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        })

        return NextResponse.json({ 
            message: 'Email sent successfully' 
        }, { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ 
            message: 'Failed to send email',
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 })
    }
}