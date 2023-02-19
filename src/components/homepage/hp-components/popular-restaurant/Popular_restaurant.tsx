import React from "react";
import Card from "../card/Card";
import "./Popular_restaurant.css";

import data from "../../../../data/data.json";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Popular_restaurant: React.FC = () => {
  const chefs = useSelector((state: any) => state.chefs.initialValue);

  const navigation = useNavigate();
  return (
    <div className="popular_restaurant">
      <span>POPULAR RESTAURANT IN EPICURE:</span>
      <div className="popular_restaurant_cards">

        {data.restaurants
          .filter((rest) => rest.is_favorite === true)
          .slice(0, 3)
          .map((rest) => {
            const chef = chefs.find((chef: any) =>
              chef.restaurant_ids.includes(rest.id)
            );
            const chef_name = `${chef?.first_name} ${chef?.last_name}`;
            return (
              <Card
                onclick={() => {
                  navigation(`/restaurants/${rest.id}`);
                }}
                chefName={chef_name}
                class="rest"
                img={rest.img_url}
                name={rest.name}
                rating={rest.rating}
              />
            );
          })}

      
      {/* {
    data.restaurants.filter(rest => rest.is_favorite === true)
    .slice(0, 3)
    .map((rest) => (
      <Card class="rest"  img={rest.img_url} name={rest.name} rating={rest.rating} />
    ))
} */}

         
      </div>
      <button>All Restaurant {">>"}</button>
    </div>
  );
};

export default Popular_restaurant;
