const jwt = require("jsonwebtoken");

const generateToken = () => {
  return jwt.sign(
    {
      role: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

module.exports = generateToken;