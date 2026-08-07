import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, matterType, message } = await request.json();

    if (!name || !email || !matterType || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Enquiries <enquiries@yourdomain.com>",
      to: ["info@yourdomain.com"],
      replyTo: email,
      subject: `New Website Enquiry - ${matterType}`,
      text: `
New website enquiry

Name: ${name}
Email: ${email}
Matter Type: ${matterType}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Unable to send enquiry" },
      { status: 500 }
    );
  }
}