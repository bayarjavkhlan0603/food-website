import { FoodModel } from "../model/food.js";
import { CategoryModel } from "../model/category.js";

export const createFood = async (req, res) => {
  const { name, price, image, ingredients, category } = req.body;
  try {
    const food = await FoodModel.create({
      name: name,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });
    return res
      .status(200)
      .send({
        succes: true,
        food: food,
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

export const getFoods = async (_, res) => {
  try {
    const foods = await FoodModel.find().populate("category");

    return res
      .status(200)
      .send({
        succes: true,
        foods: foods,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};

export const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await FoodModel.findById(id);
    return res
      .status(200)
      .send({
        succes: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};

export const getFoodsByCategoryId = async (req, res) => {
  try {
    const food = await CategoryModel.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      {
        $project: {
          name: 1,
          foods: 1,
        },
      },
    ]);
    return res
      .status(200)
      .send({
        succes: true,
        food: food,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};

// export const getFoodsByCategoryId = async (req, res) => {
//   const { categoryId } = req.body;

//   try {
//     const food = await FoodModel.find().populate("category");

//     FoodModel.find({ category: categoryId });
//     return res
//       .status(200)
//       .send({
//         succes: true,
//         food: food,
//       })
//       .end();
//   } catch (error) {
//     console.error(error, "err");
//     return res.status(400).res.send({ succes: false, message: error }).end();
//   }
// };
