import React from "react";
import Card from "../card/Card";
import data from "../../../../data/data.json"
import "../popular-restaurant/Popular_restaurant.css";


const Popular_dishes: React.FC = () => {

    

    return (
      <div className="popular_restaurant">
      <span>SIGNATURE DISH OF:</span>
      <div className="popular_restaurant_cards">
          <Card class="dish" img={data.dishes[1].img_url} name={data.dishes[1].name} dishDescription={data.dishes[1].ingredients} icons={data.dishes[1].icons} price={data.dishes[1].price}  />
          <Card class="dish" img={data.dishes[2].img_url} name={data.dishes[2].name} dishDescription={data.dishes[2].ingredients} icons={data.dishes[2].icons} price={data.dishes[2].price}  />
          <Card class="dish" img={data.dishes[3].img_url} name={data.dishes[3].name} dishDescription={data.dishes[3].ingredients} icons={data.dishes[3].icons} price={data.dishes[3].price}  />
      </div>
      </div>
      )
    }

export default Popular_dishes;