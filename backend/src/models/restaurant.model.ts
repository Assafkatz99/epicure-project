import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IRestaurant{
  id: number;
  is_favorite: boolean;
  name: string;
  img_url: string;
  hours: Array<number>;
  address: string;
  rating: number;
  dish_ids: Array<number>;
  opening_year: number;
}

export const restaurantSchema = new Schema<IRestaurant>({
    id: {type: Number, required:true},
    is_favorite: {type: Boolean, required:true},
    name: {type: String, required:true},
    img_url:{type: String, required:true},
    hours: [{type: Number}],
    address: {type: String},
    rating: {type: Number},
    dish_ids: [{type: Number}],
    opening_year: {type: Number}
})

export const RestaurantModel = mongoose.model<IRestaurant>("restaurants", restaurantSchema);
