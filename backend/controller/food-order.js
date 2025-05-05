import { FoodOrderModel } from "../model/food-order.js";

export const createFoodOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems } = req.body;
  try {
    const foodOrder = await FoodOrderModel.create({
      user: user,
      totalPrice: totalPrice,
      foodOrderItems: foodOrderItems,
    });
    return res
      .status(200)
      .send({
        succes: true,
        foodOrder: foodOrder,
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

export const getFoodOrders = async (_, res) => {
  try {
    const foodOrders = await FoodOrderModel.find().populate("foodId");
    return res
      .status(200)
      .send({
        succes: true,
        foodOrders: foodOrders,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};

export const getFoodOrderByUserId = async (req, res) => {
  const { userId } = req.body;
  try {
    const foodOrder = await FoodOrderModel.find({ user: userId });
    return res
      .status(200)
      .send({
        succes: true,
        foodOrder: foodOrder,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};
