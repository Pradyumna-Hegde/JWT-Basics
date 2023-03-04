import jwt from "jsonwebtoken";
import CustomAPIError from "../errors/custom-error.js";
import "dotenv/config";

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide valid username or password", 400);
  }

  // just for demo puropose.
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, secret, { expiresIn: "30d" });
  res.status(200).json({ msg: "user created successfully", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("No token provided", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secret);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Swagat Pranam ${decoded.username} `,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
  } catch (error) {
    throw new CustomAPIError("No token provided", 401);
  }
};

export { login, dashboard };
