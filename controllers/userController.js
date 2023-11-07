// controllers/userController.js
const User = require("../models/usermodel");

async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Check if a user with the provided email exists in the database
    const user = await User.findOne({ email });

    if (user) {
      // Check the provided password against the hashed password in the database
      if (user.password === password) {
        // Login successful
        res.status(200).json({ message: "Login successful" });
      } else {
        // Invalid credentials
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      // User not found
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    // Internal server error
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  login,
};
