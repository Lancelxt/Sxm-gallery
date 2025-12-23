import { contactEmailTemplate } from "@/constants/emailTemplate"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "hello@example.com",
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      html: contactEmailTemplate({
        name,
        email,
        message,
      }),
    })

    return Response.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
