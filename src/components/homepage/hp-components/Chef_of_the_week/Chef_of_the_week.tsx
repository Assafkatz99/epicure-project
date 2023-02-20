import React from "react";
import Chef_img_card from "../Chef_img_card/Chef_img_card";
import Small_rest_card from "../small_rest_card/Small_rest_card";

import "./Chef_of_the_week.css";
import { useNavigate } from "react-router-dom";
import Restaurants from "../../../restaurants/Restaurants";
import { useSelector } from "react-redux";


const Chef_of_the_week: React.FC = () => {
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const chefs = useSelector((state: any) => state.chefs.value);
  const chef_of_the_week_id = useSelector((state: any) => state.chefs.cotw_id);
  
  const cotw = chefs.find((chef:any) => chef.id === chef_of_the_week_id);

  const navigation = useNavigate();


  return (
    <div className="cotw_div">
      <h1>CHEF OF THE WEEK:</h1>
      <div className="upper_cotw_div">
        <Chef_img_card
          layout="homepage"
          chef_f_name={cotw?.first_name ? cotw.first_name : ""}
          chef_l_name={cotw?.last_name ? cotw.last_name : ""}
          chef_img_src={cotw?.img_url ? cotw.img_url : ""}
        />
        <p>{cotw?.about}</p>
      </div>
      <div className="botton_cotw_div">
        <span>{cotw?.first_name}'s Restaurant</span>
        <div className="cotw_cards">
  {cotw?.restaurant_ids
    .map((rest_id:any) => restaurants.find((rest:any) => rest.id === rest_id))
    .slice(0, 4) 
    .map((restaurant:any, index:number) => (
      <Small_rest_card
      key={index}
      onclick={() => {navigation ( `/restaurants/${restaurant?.id}`)}}
        rest_img={restaurant?.img_url ? restaurant?.img_url : ""}
        rest_name={restaurant?.name ? restaurant?.name : ""}
      />
    ))}
</div>
      </div>
    </div>
  );
};


export default Chef_of_the_week;
