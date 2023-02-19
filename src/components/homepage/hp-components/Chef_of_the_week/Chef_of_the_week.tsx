import React from "react";
import Chef_img_card from "../Chef_img_card/Chef_img_card";
import Small_rest_card from "../small_rest_card/Small_rest_card";
import "./Chef_of_the_week.css";
import { useNavigate } from "react-router-dom";
import Restaurants from "../../../restaurants/Restaurants";

<<<<<<< Updated upstream

=======
const Chef_of_the_week: React.FC = () => {
  const cotw = data.chefs.find((chef) => chef.id === data.chef_of_the_week_id);
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
    .map((rest_id) => data.restaurants.find((rest) => rest.id === rest_id))
    .slice(0, 4) 
    .map((restaurant) => (
      <Small_rest_card
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
>>>>>>> Stashed changes

const Chef_of_the_week: React.FC= () => {

      return (<div className="cotw_div">
        <h1>CHEF OF THE WEEK:</h1>
        <div className="upper_cotw_div">
            <Chef_img_card chef_f_name="Yossi" chef_l_name="issoY" chef_img_src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum et ipsam inventore vitae eius similique, magnam sapiente hic culpa! Distinctio, neque saepe. Consequatur libero perferendis laboriosam vero accusamus corrupti veniam, veritatis iure fugit, blanditiis hic cupiditate rerum culpa quam quas eum odit nesciunt illo commodi. Accusantium et ab quod modi?</p>
        </div>
        <div className="botton_cotw_div">
            <span>{"Yossi"}'s Restaurant</span>
            <div className="cotw_cards">
                <Small_rest_card rest_img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" rest_name="afjad sadsa "/>        
                <Small_rest_card rest_img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" rest_name="afjad sadsa "/>        
                <Small_rest_card rest_img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" rest_name="afjad sadsa "/>        
            </div>       
        </div>
        </div>
      )
    }

export default Chef_of_the_week;