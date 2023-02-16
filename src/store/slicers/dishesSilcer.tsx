import { createSlice } from '@reduxjs/toolkit';
import data from "../../data/data.json"


export const dishesSlice = createSlice({
    name: 'dishes',
    initialState: {
      initialValue: data.dishes,
      value: data.dishes
    },
    reducers: {

    },
  })
  
  export const {  } = dishesSlice.actions
  
  export default dishesSlice.reducer
  