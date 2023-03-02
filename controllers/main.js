import CustomAPIError from "../errors/custom-error.js";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide valid username or password", 400);
  }
  res.send("Fake Login/Register/Signup Route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Swagat Pranam!`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

export { login, dashboard };