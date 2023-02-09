import React from "react";
import "./homepage.css";

import Navbar from "../navbar/Navbar";
import Hero from "./hp-components/hero-component/Hero";
import Popular_restaurant from "./hp-components/popular-restaurant/Popular_restaurant";
import Popular_dishes from "./hp-components/popular-dishes/Popular_dishes";


const Homepage: React.FC = () => {
      return (<>
        <Navbar />
        <Hero />
        <Popular_restaurant />
        <Popular_dishes />
        </>
      )
    }

export default Homepage;