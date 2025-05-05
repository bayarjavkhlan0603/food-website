import { CategoryModel } from "../model/category.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await CategoryModel.create({
      name: name,
    });
    return res
      .status(200)
      .send({
        succes: true,
        category: category,
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

export const getCategories = async (_, res) => {
  try {
    const categories = await CategoryModel.find();
    return res
      .status(200)
      .send({
        succes: true,
        categories: categories,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res.status(400).res.send({ succes: false, message: error }).end();
  }
};
