import React from "react";
import Restaurant_card from "../../../restaurant-card/Restaurant_card";
import "./Popular_restaurant.css";


const Popular_restaurant: React.FC = () => {
      return (<div className="popular_restaurant">
            <Restaurant_card img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" chef="dsadsa" rating={5} name="dsadsa" />
            <Restaurant_card img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" chef="dsadsa" rating={5} name="dsadsa" />
            <Restaurant_card img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" chef="dsadsa" rating={5} name="dsadsa" />
        </div>
      )
    }

export default Popular_restaurant;