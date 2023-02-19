import { createSlice } from '@reduxjs/toolkit';
import data from "../../data/data.json"


export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState: {
      initialValue: data.restaurants,
      value: data.restaurants
    },
    reducers: {
      filter: (state, action) => {

        switch (action.payload){
        case "all":
            state.value = state.initialValue;
        break;
        case "new":
            state.value = state.initialValue.filter((e) => e.opening_year >= new Date().getFullYear());
        break;
        case "most_popular":
            state.value = state.initialValue.filter((e) => e.rating > 4 );
        break;
        case "open_now":
            state.value = state.initialValue.filter((e) => e.hours[0] < new Date().getHours() && e.hours[1] > new Date().getHours() );
        break;
        }
      },
    },
  })
  
  export const { filter } = restaurantsSlice.actions
  
  export default restaurantsSlice.reducer
  