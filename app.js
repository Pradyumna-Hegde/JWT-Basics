import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import "dotenv/config";
import "express-async-errors";
import mainRouter from "./routes/main.js";

const app = express();
const port = process.env.PORT || 6000;
const uri = process.env.URI;

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
