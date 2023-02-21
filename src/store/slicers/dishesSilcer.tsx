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
      state.current_dishes = action.payload.dishes_id_list.map(
        (dish_id: number) => {
          return state.initialValue.find((dish) => dish.id == dish_id);
        }
      );

      state.current_dishes = state.current_dishes.filter(
        (item) => item !== undefined
      );

      switch (action.payload.dish_timing) {
        case "breakfast":
          state.value = state.current_dishes.filter(
            (dish) => dish.dishTiming.breakfast
          );
          break;
        case "lunch":
          state.value = state.current_dishes.filter(
            (dish) => dish.dishTiming.lunch
          );
          break;
        case "dinner":
          state.value = state.current_dishes.filter(
            (dish) => dish.dishTiming.dinner
          );
          break;
        case "":
          state.value = state.initialValue;
          break;
      }
    },
  },
});

export const { filterDishes } = dishesSlice.actions;
export default dishesSlice.reducer;
