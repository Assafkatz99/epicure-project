import React, { useEffect, useState } from "react";
import { Clean_button } from "../../typs/buttons/Styled_buttons";
import Card from "../homepage/hp-components/card/Card";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";

import "./restaurants.css";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../store/slicers/restaurantsSlicer";
import { useNavigate, NavLink } from "react-router-dom";

const Restaurants: React.FC = () => {
    const dispatch = useDispatch();
    const restaurants:any = useSelector ((state:any) => state.restaurants.value)
    const chefs:any = useSelector ((state:any) => state.chefs.initialValue)
    const [boldName, setBoldName] = useState("all")  
  useEffect(() => {
    dispatch(filter(boldName));
  }, [boldName]);

  const navigation = useNavigate()
  return (
    <>
      <Navbar />
      <div className="filters_first_row">
        <div className="buttons_first_row">
          <Clean_button
            name="all"
            bold={boldName === "all"}
            onClick={() => {
              setBoldName("all");
              dispatch(filter(boldName));
            }}
          >
            All
          </Clean_button>
          <Clean_button
            name="new"
            bold={boldName === "new"}
            onClick={() => {
              setBoldName("new");
              dispatch(filter(boldName));
            }}
          >
            New
          </Clean_button>
          <Clean_button
            name="most_popular"
            bold={boldName === "most_popular"}
            onClick={() => {
              setBoldName("most_popular");
              dispatch(filter(boldName));
            }}
          >
            Most Popular
          </Clean_button>
          <Clean_button
            name="open_now"
            bold={boldName === "open_now"}
            onClick={() => {
              setBoldName("open_now");
              dispatch(filter(boldName));
            }}
          >
            Open Now
          </Clean_button>
          <Clean_button
            name="map_view"
            bold={boldName === "map_view"}
            onClick={() => setBoldName("map_view")}
          >
            Map View
          </Clean_button>
        </div>
        </div>

        <div className="filters_second_row">
          <div className="buttons_second_row">
            <Clean_button>Price Range  <img src='assets/icons/rest_page_icons/arrow_down.svg' /></Clean_button>
            <Clean_button>Distance  <img src='assets/icons/rest_page_icons/arrow_down.svg' /></Clean_button>
            <Clean_button>Rating  <img src='assets/icons/rest_page_icons/arrow_down.svg' /></Clean_button>
          </div>
        </div>

      <div className="restaurants_grid">
        {restaurants.map((restaurant: any, index:number) => {
         const chef = chefs.find((chef:any) => chef.restaurant_ids.includes(restaurant.id) )
         const chef_name = `${chef?.first_name} ${chef?.last_name}`
        return(
          <Card class="rest"
          key={index}
          onclick={() => {navigation ( `/restaurants/${restaurant.id}`)}}
            img={restaurant.img_url}
            name={restaurant.name}
            chefName={ chef_name }
            rating={restaurant.rating}
          />
        )
        })}
      </div>

      <Footer />

      </>
  )
      }


export default Restaurants;