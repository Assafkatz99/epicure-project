import { ChefsModel } from "../models/chefs.model";

export const getChefs = async () => {
  try {
    const Chefs = await ChefsModel.find();
    return Chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
