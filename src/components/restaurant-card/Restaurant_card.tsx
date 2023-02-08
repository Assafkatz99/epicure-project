import React from "react";
import IRestaurantCard from "../../typs/interfaces/IRestaurantCard";
import "./Restaurant_card.css"

const Resraurant_card: React.FC<IRestaurantCard>= (props:IRestaurantCard) => {
      return (
      <div className="restaurant_card">
        <img className="dish_img" src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <h2>{props.chef}</h2>
        <img src={"/assets/icons/rating_svgs/rate-" + props.rating + ".svg" } alt={props.rating.toString()} />
      </div>
      )
    }

export default Resraurant_card;