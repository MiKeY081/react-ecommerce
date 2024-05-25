import express from "express";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { productRoute } from "./routes/productRoute.js";
import { categoryRoute } from "./routes/categoryRoute.js";
import { orderRoute } from "./routes/orderRoute.js";

const app = express();
config();
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    secure: "true",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", userRoute);
app.use("/api/v1", productRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", orderRoute);

app.listen(5001, () => {
  console.log("Server is running on 5001");
});
