require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");

// database
const connectDB = require("./db/connect");

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

//  routers
const authRouter = require("./routes/authRoutes");

app.use("/api/v1/auth", authRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
