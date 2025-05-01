import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./Routes/postRoutes.js";
import authRoute from "./Routes/authRoutes.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(7500, () => {
  console.log("Server Is Running!");
});
