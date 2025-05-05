import { UserModel } from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
import nodemailer from "nodemailer";
import { sendMail } from "../utils/sendMailer.js";

configDotenv();

const secret_key = process.env.SECRET_KEY;

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user is not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invaled email or password",
      });
    }
    console.log(user, "user");
    const token = jwt.sign({ ...user }, secret_key, { expiresIn: 3600 });

    return res.status(200).send({
      success: true,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send({
      success: false,
      message: "internal server error",
    });
  }
};

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "bayarjavkhlan8005@gmail.com",
//     pass: "xwebztmjzdgbacuz",
//   },
// });

// export const sendMail = async (req, res) => {
//   const info = {
//     from: '"Maddison Foo Koch 👻" <bayarjavkhlan8005@gmail.com>',
//     to: "baynaa123455@gmail.com",
//     subject: "Hello ✔",
//     text: "Hello world?",
//     html: "<b>Hello world?</b>",
//   };
//   try {
//     const response = await transporter.sendMail(info);
//     return res.send(response);
//   } catch (error) {
//     return res.send(error);
//   }
// };

export const sendMailer = async (req, res) => {
  const { email, subject, text } = req.body;
  try {
    const response = await sendMail(email, subject, text);
    res.status(200).send({ success: true, data: response });
  } catch (error) {
    res.status(400).send({ succes: false, error: error });
  }
};
