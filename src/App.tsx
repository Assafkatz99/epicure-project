import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Restaurants from "./components/restaurants/Restaurants";
import Chefs from "./components/chefs/Chefs";
import SingleRestaurant from "./components/restaurants/restaurants_components/SingleRestaurant";
import { useEffect } from "react";
import SignInPage from "./components/signInPage/SignInPage";

function App() {
  useEffect(() => {
    window.addEventListener("load", function () {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/restaurants" element={<Restaurants />}></Route>
          <Route
            path="/restaurants/:single"
            element={<SingleRestaurant />}
          ></Route>
          <Route path="/chefs" element={<Chefs />}></Route>
          <Route path="/sign-in" element={<SignInPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
