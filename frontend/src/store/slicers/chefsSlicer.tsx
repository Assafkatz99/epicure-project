import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    initialValue: data.chefs,
    value: data.chefs,
    chef_of_the_week_id: data.chef_of_the_week_id,
  },
  reducers: {},
});

export default chefsSlice.reducer;
