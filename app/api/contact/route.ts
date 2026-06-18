import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, businessType, phone, website } = await req.json()

  if (!name || !businessType || !phone) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"TradeFlo Systems" <${process.env.SMTP_USER}>`,
    to: 'hello@tradeflosystems.com',
    subject: `New Audit Request — ${businessType} — ${name}`,
    text: `
New audit request from TradeFlo Systems website.

Name: ${name}
Business Type: ${businessType}
Phone: ${phone}
Website: ${website || 'Not provided'}
    `.trim(),
    html: `
<div style="font-family:monospace;color:#111110;background:#F0EDE8;padding:32px;">
  <h2 style="font-size:24px;text-transform:uppercase;letter-spacing:2px;margin-bottom:24px;">New Audit Request</h2>
  <table style="border-collapse:collapse;width:100%;">
    <tr><td style="padding:8px 16px 8px 0;color:#7A7570;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Name</td><td style="padding:8px 0;font-size:14px;">${name}</td></tr>
    <tr><td style="padding:8px 16px 8px 0;color:#7A7570;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Business Type</td><td style="padding:8px 0;font-size:14px;">${businessType}</td></tr>
    <tr><td style="padding:8px 16px 8px 0;color:#7A7570;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Phone</td><td style="padding:8px 0;font-size:14px;">${phone}</td></tr>
    <tr><td style="padding:8px 16px 8px 0;color:#7A7570;text-transform:uppercase;font-size:12px;letter-spacing:1px;">Website</td><td style="padding:8px 0;font-size:14px;">${website || 'Not provided'}</td></tr>
  </table>
</div>
    `.trim(),
  })

  return NextResponse.json({ success: true })
}
