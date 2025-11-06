import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// === CORS CONFIG ===
const allowedOrigins = [
  "http://localhost:5173",
  "https://solenesun.com",
  "https://smy619.github.io",
  "www.solenesun.com",
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

// === TEST ROUTE ===
app.get("/", (req, res) => {
  res.send("Email API is running!");
});

// === POST /send ===
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
  body: JSON.stringify({
        sender: {
          name: "Ting Sun",
          email: process.env.EMAIL_SENDER, 
        },
        to: [
          {
            email: process.env.EMAIL_RECEIVER, 
          },
        ],
        replyTo: {
          email,
          name,
        },
        subject: `New message from ${name}`,
        textContent: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Brevo API error:", data);
      throw new Error(data.message || "Failed to send email");
    }

    console.log("✅ Email sent successfully:", data);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
