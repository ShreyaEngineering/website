const express = require("express");
const rateLimit = require("express-rate-limit");

const {
  login,
  logout,
  me,
} = require("../controllers/authController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many login attempts. Try again in 15 minutes.",
  },
});

router.post("/login",loginLimiter,login);

router.post("/logout",protect, logout);

router.get("/me", protect, me);

module.exports = router;