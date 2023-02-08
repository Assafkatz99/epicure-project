import React from "react";
import "./homepage.css";

import Navbar from "../navbar/Navbar";
import Hero from "./hp-components/hero-component/Hero";


const Homepage: React.FC = () => {
      return (<>
        <Navbar />
        <Hero />
        </>
      )
    }

export default Homepage;