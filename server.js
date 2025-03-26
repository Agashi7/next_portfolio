require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", async (req, res) => {
  try {
    const response = await axios.post("https://api.web3forms.com/submit", req.body, {
      headers: { "Content-Type": "application/json" },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ error: "Failed to send message." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
