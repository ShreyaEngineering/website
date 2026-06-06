const bcrypt = require("bcryptjs");

const generateToken = require("../utils/generateToken");

const login = async (req, res) => {
  try {
    console.log(res.body)
    const { email, password } = req.body;

    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: "Invalid",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid ",
      });
    }

    const token = generateToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
  console.error(error);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
};

const logout = (req, res) => {
  res.clearCookie("token", {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
});

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};

const me = (req, res) => {
  res.status(200).json({
    authenticated: true,
    role: "admin",
  });
};

module.exports = {
  login,
  logout,
  me,
};