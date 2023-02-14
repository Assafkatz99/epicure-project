import React from "react";
import Card from "../card/Card";
import "./Popular_restaurant.css";
import data from "../../../../data/data.json"

const Popular_restaurant: React.FC = () => {
      return (
      <div className="popular_restaurant">
      <span>POPULAR RESTAURANT IN EPICURE:</span>
      <div className="popular_restaurant_cards">
      
      {
    data.restuarants.filter(rest => rest.isFavorite === true)
    .slice(0, 3)
    .map((rest) => (
      <Card class="rest" img={rest.rest_img} name={rest.rest_name} rating={rest.rest_rating} />
    ))
}

         
      </div>
      <button>All Restaurant {">>"}</button>
        </div>
      )
    }

export default Popular_restaurant;