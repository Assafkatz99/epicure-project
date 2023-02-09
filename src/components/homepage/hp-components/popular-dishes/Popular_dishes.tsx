import React from "react";
import Card from "../card/Card";
import "../popular-restaurant/Popular_restaurant.css";


const Popular_dishes: React.FC = () => {
      return (
      <div className="popular_restaurant">
      <span>SIGNATURE DISH OF:</span>
      <div className="popular_restaurant_cards">

          <Card class="dish" img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" name="Dish2" dishDescription="fdsda dsadsada dsadsad sa asdsad fdsda dsadsada dsadsad sa asdsad fdsda dsadsaddsada dsa dsakjdsahdksa sadlkjagTATDdsad sa asdsad" icons={["/assets/logos/person_button.svg","/assets/logos/person_button.svg"]} price={52}  />
          <Card class="dish" img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" name="Dish2" dishDescription="fdsda dsadsada dsadsad sa asdsad " icons={["/assets/logos/person_button.svg","/assets/logos/person_button.svg"]} price={52}  />
          <Card class="dish" img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" name="Dish2" dishDescription="fdsda dsadsada dsadsad sa asdsad " icons={["/assets/logos/person_button.svg","/assets/logos/person_button.svg"]} price={52}  />
      </div>
        </div>
      )
    }

export default Popular_dishes;