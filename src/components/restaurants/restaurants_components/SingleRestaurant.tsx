import React, { useEffect, useMemo } from "react";
import Footer from "../../homepage/hp-components/footer/Footer";
import Navbar from "../../navbar/Navbar";
import { White_button } from "../../../typs/buttons/Styled_buttons";
import "./SingleRestaurant.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../homepage/hp-components/card/Card";
import { useParams } from "react-router-dom";
import Modal from "../../modal/Modal";


const SingleRestaurant: React.FC = () => {
    const dishes = useSelector((state: any) => state.dishes.value);
    const chefs = useSelector((state: any) => state.chefs.value);
    const restaurants = useSelector((state: any) => state.restaurants.value);
    const rest_id = (useParams()["single"] as unknown as number) ;
    console.log(rest_id)
    console.log(restaurants)
    const specific_rest =restaurants.find((rest:any) => rest.id == rest_id  )
    console.log(specific_rest)
    
  

    const chef = chefs.find((chef:any) => chef.restaurant_ids.includes(Number(rest_id)) )
    const chef_name = `${chef?.first_name} ${chef?.last_name}`

    return (<>
      {specific_rest&& 
      <>
        <Navbar />
        <div className="rest_details">
        <img src={specific_rest.img_url} alt="rest_img" />
          <div className="chef_n_rest_name">
          <h3>{specific_rest.name}</h3>
          <h2>{chef_name}</h2>
          </div>
            <h1>{(specific_rest.hours[0] < new Date().getHours() && specific_rest.hours[1] > new Date().getHours()) ? "Open now" : "closed" }</h1>

          <div className="single_rest_filters">
            <White_button>Breakfast</White_button>
            <White_button>lunch</White_button>
            <White_button>dinner</White_button>
          </div>
        </div>
        <div className="dishes_grid_div">
        <div className="dishes_grid">
          {specific_rest.dish_ids.map((dish_id: any) => {
            const dish = dishes[dish_id-1];
            if (dish) { 
              return (
                <Card
                key={dish_id} 
                onclick={() => {}}
                class="small_dish" 
                  img={dish.img_url}
                  name={dish.name}
                  dishDescription={dish.ingredients}
                  price={dish.price}
                  />
                  );
                } else {
              return null;
            }
          })}
        </div>
        </div>
        <Footer />
        {/* <Modal /> */}
        </>
      }
            </>
    );
};

export default SingleRestaurant;
