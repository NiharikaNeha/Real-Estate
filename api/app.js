import express from "express";
import postRoute from "./Routes/postRoutes.js";
import authRoute from "./Routes/authRoutes.js";

const app = express();

app.use(express.json())

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(7500, () => {
  console.log("Server Is Running!");
});
