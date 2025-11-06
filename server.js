import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.get("/",(req, res) => {
  res.send("Email API is running!");
})

app.post("/send-email", async(req, res) => {
  const  { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host:"smtp.ionos.fr",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from :`"Portfolio Contact" <contact@solenesun.com>`,
      to : process.env.EMAIL_RECEIVER,
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`
    });

    console.log(`Email sent from ${email}`);
    res.status(200).json({ success:true, message: "Email sent successfully! "})
  } catch (error) {
    console.error("Error sending email= ",error);
    res.status(500).json({ success: false, error: error.message });
  }
  });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));