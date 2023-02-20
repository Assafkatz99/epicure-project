import React from "react";
import Card from "../card/Card";
import "./Popular_restaurant.css";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Popular_restaurant: React.FC = () => {
  const chefs = useSelector((state: any) => state.chefs.initialValue);
  const restaurants = useSelector((state: any) => state.restaurants.value);

  const navigation = useNavigate();
  return (
    <div className="popular_restaurant">
      <span>POPULAR RESTAURANT IN EPICURE:</span>
      <div className="popular_restaurant_cards">
        {restaurants
          .filter((rest: any) => rest.is_favorite)
          .slice(0, 3)
          .map((rest: any, index: number) => {
            const chef = chefs.find((chef: any) =>
              chef.restaurant_ids.includes(rest.id)
            );
            const chef_name = `${chef?.first_name} ${chef?.last_name}`;
            return (
              <Card
                key={index}
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
      </div>
      <button>All Restaurant {">>"}</button>
    </div>
  );
};

export default Popular_restaurant;
