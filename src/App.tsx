import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './components/homepage/Homepage';
import Restaurants from './components/restaurants/Restaurants';
import Chefs from './components/chefs/Chefs';
import SingleRestaurant from './components/restaurants/restaurants_components/SingleRestaurant';

function App() {
  return (<>
    

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}  ></Route>
      <Route path="/Restaurants" element={<Restaurants />} ></Route>
      <Route path="/Restaurants/:single" element={<SingleRestaurant />} ></Route>
      <Route path="/Chefs" element={<Chefs />}></Route>
      </Routes>
    </BrowserRouter>
    </>
    );
}

export default App;
