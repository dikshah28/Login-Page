import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.js"; 

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  console.log("Signup hit");
  console.log(req.body);

  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json("All fields required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    console.log("User saved");
    res.json("User registered successfully");

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json("Server error");
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Wrong password");

    res.json("Login successful");

  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

export default router;