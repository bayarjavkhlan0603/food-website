import mongoose, { Schema } from "mongoose";

const foodOrderItemShema = new mongoose.Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "Food" },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);

const foodOrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: { type: [foodOrderItemShema] },
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export const FoodOrderModel = mongoose.model("FoodOrder", foodOrderSchema);
