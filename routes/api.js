// RESTful API Endpoint for User Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if a user with the provided email exists in the database
    const user = await User.findOne({ email });

    if (user) {
      // Check the provided password against the hashed password in the database
      if (user.password === password) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
