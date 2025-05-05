import { configDotenv } from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

const secret_key = processs.env.SECRET_KEY;

const verifyToken = (res, req, next) => {};
