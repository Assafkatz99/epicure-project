import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
    const navigate  = useNavigate();
      return (
    <div className="navbar">
      <button id="logo-button-id" onClick={() => {navigate("/")}} ><img className="logo" src="/assets/logos/logo.svg" /></button>
      <div className="menu">

        <div className="menu-left">
          <button onClick={() => {navigate("/Restaurants")}}>Restaurants</button>
          <button onClick={() => {navigate("/Chefs")}}>Chefs</button>
        </div>

        <div className="menu-right">
        <input type="text" name="search" placeholder="Search for restaurant cuisine, chef" />
        <button><img className="menu-icons" src="/assets/logos/person_button.svg" /></button>
        <button><img className="menu-icons" src="/assets/logos/shopping_bag_button.svg" /></button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
