const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, telegram, idea, budget, availability_date, availability_time, source } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `🔥 New Consultation Request from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
        <h2 style="color: #111;">New Project Lead!</h2>
        <p style="font-size: 16px; color: #333;">You just received a new consultation request.</p>
        
        <div style="background-color: #fff; padding: 15px; border-radius: 8px; border: 1px solid #eee;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telegram:</strong> ${telegram ? telegram : "Not provided"}</p>
          <p><strong>Budget:</strong> <span style="color: #2e7d32; font-weight: bold;">${budget || "Not selected"}</span></p>
          <p><strong>Availability:</strong> ${availability_date} at ${availability_time} UTC</p>
          <p><strong>Referral Source:</strong> ${source}</p>
          
          <h3 style="margin-top: 20px; color: #111;">Project Idea:</h3>
          <p style="background-color: #f4f4f4; padding: 10px; border-radius: 5px; color: #555;">${idea}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
