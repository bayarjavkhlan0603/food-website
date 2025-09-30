import express, { json, request, response } from "express";
import { connectMongoDB } from "./connectDB.js";
import { userRouter } from "./routers/user.js";
import cors from "cors";
import { dotenv } from "dotenv";
import { categoryRouter } from "./routers/category.js";
import { foodRouter } from "./routers/food.js";
import { foodOrderRouter } from "./routers/food-order.js";
import { authRouter } from "./routers/auth.js";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

connectMongoDB();

app.use(cors());
app.use(json());

app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/food", foodRouter);
app.use("/foodOrder", foodOrderRouter);
app.use("/", authRouter);

app.get("/", (request, response) => {
  response.send("HELLO WORLD");
});

app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
