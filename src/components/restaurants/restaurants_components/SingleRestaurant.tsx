import React from "react";
import Footer from "../../homepage/hp-components/footer/Footer";
import Navbar from "../../navbar/Navbar";
import { White_button } from "../../../typs/buttons/Styled_buttons";
import "./SingleRestaurant.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../homepage/hp-components/card/Card";
import data from "../../../data/data.json"
import { useParams } from "react-router-dom";


const SingleRestaurant: React.FC = () => {

    const dispatch = useDispatch();
    const dishes = useSelector((state: any) => state.dishes.value);

    const rest_id = useParams();
    console.log(rest_id)
    

      return (<>
      <Navbar />
            <img src="" alt="rest_img" />
            <div className="rest_details">
                <h3>dsadsa</h3>
                <h2>dsadsa</h2>
                <h1>dasdsad</h1>
            <div className="single_rest_filters">
                <White_button>dsadsa</White_button>
                <White_button>dsadsa</White_button>
                <White_button>dsadsa</White_button>
            </div>
            </div>

            <div className="dishes_grid">
        {dishes.map((dish: any) => (
          <Card
            class="dish"
            img={dish.img_url}
            name={dish.name} 
            dishDescription={dish.ingredients} 
            icons={dish.icons} 
            price={dish.price}
          />
        ))}
      </div>

        <Footer />
        </>
      )
    }

export default SingleRestaurant;