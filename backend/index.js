const express = require("express");
const connectToMongo = require("./connection/connection");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv");
const passport = require("passport");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
dotenv.config();
connectToMongo();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", userRoute);
app.use("/chat", chatRoutes); 

app.listen(process.env.PORT, () => {
  console.log("app running on port 4000");
});
