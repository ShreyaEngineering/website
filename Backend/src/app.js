const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL ,
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API running",
  });
});

app.use("/api/auth", authRoutes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});



module.exports = app;