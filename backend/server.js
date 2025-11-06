import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://solenesun.com",
  "https://smy619.github.io",
];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"], 
  })
);
app.options("*", cors());
app.use(express.json());

//Routes
app.get("/",(req, res) => {
  res.send("Email API is running!");
})

app.post("/send", async(req, res) => {
  const  { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host:"smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
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