import { Router } from "express";
import { login, sendMailer } from "../controller/auth.js";

export const authRouter = Router();

authRouter.post("/login", login).get("/mail", sendMailer);
