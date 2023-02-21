import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import data from "../../data/data.json";
import { IDish } from "../../typs/interfaces/slicersInterfaces";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    initialValue: data.dishes,
    value: data.dishes,
    current_dishes: data.dishes,
  },
  reducers: {
    filterDishes: (state, action) => {
      state.value = state.initialValue.filter(dish => action.payload.dishes_id_list.includes(dish.id));

      switch (action.payload.dish_timing) {
        case "breakfast":
          state.value = state.value.filter(dish => dish.dishTiming.breakfast)
          break;
          case "lunch":
          state.value = state.value.filter(dish => dish.dishTiming.lunch)
          break;
          case "dinner":
          state.value = state.value.filter(dish => dish.dishTiming.dinner)
          break;
          case "":
          break;
            }
},
  },
});

export const { filterDishes } = dishesSlice.actions;
export default dishesSlice.reducer;
