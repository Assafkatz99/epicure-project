import { configureStore } from '@reduxjs/toolkit';
import dishesSilcer from './slicers/dishesSilcer';
import restaurantsSlicer from './slicers/restaurantsSlicer';

export default configureStore({
  reducer: {
    restaurants : restaurantsSlicer,
    dishes : dishesSilcer
  },
});
