import { configureStore } from "@reduxjs/toolkit";
import chefsSlicer from "./slicers/chefsSlicer";
import dishesSilcer from "./slicers/dishesSilcer";
import restaurantsSlicer from "./slicers/restaurantsSlicer";

export default configureStore({
  reducer: {
    restaurants: restaurantsSlicer,
    dishes: dishesSilcer,
    chefs: chefsSlicer,
  },
});
