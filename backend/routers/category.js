import express from "express";
import { createCategory, getCategories } from "../controller/category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", createCategory).get("/", getCategories);
