import { RestaurantModel } from "../models/Restaurant.model";

export const getRestaurants = async () => {
  try {
    const Chefs = await RestaurantModel.find();
    return Chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
