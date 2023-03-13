import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div>
        <button
          id="logo-button-id"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="/assets/logos/small-logo.svg"></img>
          <img src="/assets/logos/EPICURE-logo.svg"></img>
        </button>
      </div>
      <div className="menu">
        <div className={`menu-left ${menuOpen ? "show" : ""}`}>
          <NavLink
            to="/restaurants"
            className={({ isActive }) => (isActive ? "underline" : "notActive")}
          >
            Restaurants
          </NavLink>
          <NavLink
            to="/chefs"
            className={({ isActive }) => (isActive ? "underline" : "notActive")}
          >
            Chefs
          </NavLink>
          <hr className={"menu-left-mobile"}></hr>
          <NavLink to="/" className={"menu-left-mobile"}>
            Contact Us
          </NavLink>
          <NavLink to="/" className={"menu-left-mobile"}>
            Term of Use
          </NavLink>
          <NavLink to="/" className={"menu-left-mobile"}>
            Privacy Policy
          </NavLink>
        </div>

        <div className="menu-right">
          <button className="hamburger-button" onClick={toggleMenu}>
            <img src="/assets/logos/hamburger-icon.svg" />
          </button>
          <div className="menu-right-icons">
            <input
              type="text"
              name="search"
              placeholder="Search for restaurant cuisine, chef"
            />
            <button onClick={()=>{navigate("/sign-in")}}>
              <img
                className="menu-icons"
                src="/assets/logos/person_button.svg"
              />
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
    </div>
  );
};

export default Navbar;
