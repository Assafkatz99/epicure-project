import React from "react";
import Card from "../card/Card";
import "./Popular_restaurant.css";
import data from "../../../../data/data.json"
import { getChefNameByRestId } from "../../../../store/slicers/chefsSlicer";

const Popular_restaurant: React.FC = () => {
      return (
      <div className="popular_restaurant">
      <span>POPULAR RESTAURANT IN EPICURE:</span>
      <div className="popular_restaurant_cards">
      
      {
    data.restaurants.filter(rest => rest.is_favorite === true)
    .slice(0, 3)
    .map((rest) => (
      <Card class="rest"  img={rest.img_url} name={rest.name} rating={rest.rating} />
    ))
}

         
      </div>
      <button>All Restaurant {">>"}</button>
        </div>
      )
    }

export default Popular_restaurant;