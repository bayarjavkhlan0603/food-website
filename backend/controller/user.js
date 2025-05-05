import { UserModel } from "../model/user.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { email, password, phoneNumber, addres, isVerified } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  console.log(hashedPass, "pass");

  try {
    const oldUser = await UserModel.find({ email: email });
    if (oldUser.length > 0)
      return res.status(405).send({
        succes: "false",
        message: "ashiglagdsan email hayg bn",
      });

    const user = await UserModel.create({
      email: email,
      password: hashedPass,
      phoneNumber: phoneNumber,
      addres: addres,
      isVerified: isVerified,
    });
    return res
      .status(200)
      .send({
        succes: true,
        user: user,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    res
      .status(400)
      .send({
        succes: false,
        message: error,
      })
      .end();
  }
};

export const getUsers = async (_, res) => {
  try {
    const users = await UserModel.find().select("-password");
    return res
      .status(200)
      .send({
        succes: true,
        users: users,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    return res
      .status(200)
      .send({
        succes: true,
        users: user,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};
