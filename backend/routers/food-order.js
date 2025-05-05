import express from "express";
import {
  createFoodOrder,
  getFoodOrderByUserId,
  getFoodOrders,
} from "../controller/food-order.js";

export const foodOrderRouter = express.Router();

foodOrderRouter
  .post("/", createFoodOrder)
  .get("/", getFoodOrders)
  .get("/", getFoodOrderByUserId);
