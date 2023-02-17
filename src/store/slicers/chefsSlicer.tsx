import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    initialValue: data.chefs,
    value: data.chefs,
    cotw_id: data.chef_of_the_week_id,
    rest_data: data.restaurants,
    chef_name :""
  },
  reducers: {
    getChefNameByRestId: (state, action) => {
        const chef = state.value.find((chef) => chef.restaurant_ids.includes(action.payload) )
        state.chef_name = `${chef?.first_name} ${chef?.last_name}`
      }
      
  },
});

export const { getChefNameByRestId } = chefsSlice.actions;

export default chefsSlice.reducer;
