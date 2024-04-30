const express = require("express");
const connectToMongo = require("./connection/connection");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
const passport = require("passport");
const chatRoutes = require("./routes/chatRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
dotenv.config();
connectToMongo();

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use("/auth", userRoute);
app.use("/chat", chatRoutes);
app.listen(process.env.PORT, () => {
  console.log("app running on port 4000");
});
