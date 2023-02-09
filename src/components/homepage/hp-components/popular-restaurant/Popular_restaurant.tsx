import React from "react";
import Card from "../card/Card";
import "./Popular_restaurant.css";


const Popular_restaurant: React.FC = () => {
      return (
      <div className="popular_restaurant">
      <span>POPULAR RESTAURANT IN EPICURE:</span>
      <div className="popular_restaurant_cards">
          <Card class="rest" img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" name="Rest1" chefName="Eran the chef" rating={"2"} />
          <Card class="rest" img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" name="Rest1" chefName="Eran the chef" rating={"2"} />
          <Card class="rest" img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" name="Rest1" chefName="Eran the chef" rating={"2"} />
      </div>
      <button>All Restaurant {">>"}</button>
        </div>
      )
    }

export default Popular_restaurant;