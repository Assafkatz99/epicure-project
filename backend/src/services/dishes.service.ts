import { DishesModel } from "../models/dishes.model";

export const getDishes = async () => {
  try {
    const Dishes = await DishesModel.find();
    return Dishes;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
