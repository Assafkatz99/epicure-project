import { configureStore } from "@reduxjs/toolkit";
import {
  IChef,
  IRestaurant,
  IDish,
} from "../typs/interfaces/slicersInterfaces";
import chefsSlicer from "./slicers/chefsSlicer";
import dishesSilcer from "./slicers/dishesSilcer";
import restaurantsSlicer from "./slicers/restaurantsSlicer";

export interface RootState {
  chefs: {
    initialValue: IChef[];
    value: IChef[];
    chef_of_the_week_id: string;
  };
  restaurants: {
    initialValue: IRestaurant[];
    value: IRestaurant[];
  };
  dishes: {
    initialValue: IDish[];
    value: IDish[];
  };
}

export default configureStore({
  reducer: {
    chefs: chefsSlicer,
    restaurants: restaurantsSlicer,
    dishes: dishesSilcer,
  },
});
