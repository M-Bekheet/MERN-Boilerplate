const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// Log Errors
app.use(morgan("dev"));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(helmet());

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
