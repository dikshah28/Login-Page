import { setServers } from 'node:dns/promises';

// Forces Node.js to use Google and Cloudflare DNS
setServers(['1.1.1.1', '8.8.8.8']);

import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // 👈 Fixed the mixed import here
import connectDB from "./config/db.js";
import User from "./models/user.js";

dotenv.config();

const app = express();

// Middleware (These MUST come before your routes)
app.use(cors()); // 👈 Fixed CORS position here
app.use(express.json());

// Connect DB
connectDB();

// 1. ROUTE: Register a new user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. ROUTE: Login (This is what your frontend needs!)
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Direct comparison (Since your Compass screenshot showed plain text passwords)
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Success! Let's send the user data back
    res.status(200).json({ 
      message: "Login successful", 
      username: user.username,
      email: user.email 
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});