const express = require("express");
const app = express();

const checkToken = (req, res, next) => {
  // ...
};

app.use(checkToken);

// Your other routes here

const port = process.env.PORT || 3000;

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ranaahmad131:5hQLHCem7BaWlGWs@desol.7mmojwg.mongodb.net/?retryWrites=true&w=majority"
);

// Initialize the user model
const User = require("./models/usermodel");

// Define the API routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
