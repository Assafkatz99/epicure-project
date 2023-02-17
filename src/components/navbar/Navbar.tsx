import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [showUnderLine, setShowUnderLine] = useState<boolean>(false);
  return (
    <div className="navbar">
      <button
        id="logo-button-id"
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="logo" src="/assets/logos/logo.svg" />
      </button>
      <div className="menu">
        <div className="menu-left">
          <NavLink 
            to="/restaurants"
            className={({isActive}) => (isActive ? "underline" : "notActive")}
          >
            Restaurants
          </NavLink>
          <NavLink
            to="/chefs"
            className={({isActive}) => (isActive ? "underline" : "notActive")}
          >
            Chefs
          </NavLink>
        </div>

        <div className="menu-right">
          <input
            type="text"
            name="search"
            placeholder="Search for restaurant cuisine, chef"
          />
          <button>
            <img className="menu-icons" src="/assets/logos/person_button.svg" />
          </button>
          <button>
            <img
              className="menu-icons"
              src="/assets/logos/shopping_bag_button.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
