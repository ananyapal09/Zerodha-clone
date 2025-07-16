const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/UserModel");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "yourSecretKey"; // set this in .env

// Register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const existing = await UserModel.findOne({ email });
  if (existing) return res.status(400).send("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new UserModel({ email, password: hashedPassword });
  await user.save();

  res.status(201).send("User registered");
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) return res.status(400).send("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
