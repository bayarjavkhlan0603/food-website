import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;
console.log(uri);

export const connectMongoDB = async () => {
  try {
    await connect(uri);
    console.log("connected to db");
  } catch (error) {
    console.error(error, "err");
  }
};
