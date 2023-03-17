import { ChefsModel, IChef } from "../models/chefs.model";

export const getChefs = async () => {
  try {
    const Chefs = await ChefsModel.find();
    return Chefs;
  } catch (err) {
    console.log(err);
    throw err;
  }
};



export const createChef = async (chef: any) => {
  console.log(chef)
  try {
    const lastChef = await ChefsModel.find({}, { id: 1 }).sort({ id: -1 }).limit(1);
    const nextId = lastChef.length > 0 ? lastChef[0].id + 1 : 1;

    await ChefsModel.create({
      id: nextId,
      first_name: chef.first_name,
      last_name: chef.last_name,
      about: chef.about,
      img_url: chef.img_url,
      restaurant_ids: chef.restaurant_ids
    });

    console.log("chef created");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
