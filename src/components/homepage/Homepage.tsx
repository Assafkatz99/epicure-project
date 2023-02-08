import React from "react";
import "./homepage.css";

import Navbar from "../navbar/Navbar";
import Hero from "./hp-components/hero-component/Hero";
import Popular_restaurant from "./hp-components/popular-restaurant/Popular_restaurant";


const Homepage: React.FC = () => {
      return (<>
        <Navbar />
        <Hero />
        <Popular_restaurant />
        </>
      )
    }

export default Homepage;