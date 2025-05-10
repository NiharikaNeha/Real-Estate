import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import postRoute from "./Routes/postRoutes.js";
import authRoute from './Routes/authRoutes.js';
import testRoute from "./Routes/testRoutes.js";
import userRoute from "./Routes/userRoutes.js";
import chatRoutes from "./Routes/chatRoutes.js";
import messageRoute from "./Routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRoute);
app.use('/api/auth', authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoutes);
app.use("/api/message", messageRoute);

app.listen(7500, () => {
  console.log("Server Is Running!");
});
