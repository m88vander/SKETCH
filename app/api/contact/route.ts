import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    // Validate
    if (!body.name || !body.email || !body.subject || !body.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO || 'm88vander@gmail.com',
      subject: `New Contact Form Submission: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: body.email,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: body.email,
      subject: 'We received your message - SKETCH',
      html: `
        <h2>Thank you for reaching out</h2>
        <p>Hi ${body.name},</p>
        <p>We received your message and will get back to you within 48 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        <p>—</p>
        <p>SKETCH<br>
        <a href="https://sketch.com">sketch.com</a></p>
      `,
    })

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
