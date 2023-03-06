import jwt from "jsonwebtoken";
import RequestFailure from "../errors/request-failure.js";
import "dotenv/config";

const login = async (req, res) => {
  const { username, password } = req.body;
  const id = new Date().getDate(); // just for demo puropose.

  if (!username || !password) {
    throw new RequestFailure("Please provide valid username or password");
  }

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created successfully", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Swagat Pranam ${req.user.username} `,
    secret: `Authorization Successfull..! Lucky number: ${luckyNumber}`,
  });
};

export { login, dashboard };
