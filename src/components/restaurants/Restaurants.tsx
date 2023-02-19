import React, { useEffect, useState } from "react";
import { White_button } from "../../typs/buttons/Styled_buttons";
import Card from "../homepage/hp-components/card/Card";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import data from "../../data/data.json";

import "./restaurants.css";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../store/slicers/restaurantsSlicer";
import { NavLink } from "react-router-dom";

const Restaurants: React.FC = () => {
  const [boldName, setBoldName] = useState("all");
  const dispatch = useDispatch();
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const chefs= useSelector((state: any) => state.chefs.initialValue);

  useEffect(() => {
    dispatch(filter(boldName));
  }, [boldName]);
  return (
    <>
      <Navbar />

      <div className="filters_first_row">
        <div className="buttons_first_row">
          <White_button
            name="all"
            bold={boldName === "all"}
            onClick={() => {
              setBoldName("all");
              dispatch(filter(boldName));
            }}
          >
            All
          </White_button>
          <White_button
            name="new"
            bold={boldName === "new"}
            onClick={() => {
              setBoldName("new");
              dispatch(filter(boldName));
            }}
          >
            New
          </White_button>
          <White_button
            name="most_popular"
            bold={boldName === "most_popular"}
            onClick={() => {
              setBoldName("most_popular");
              dispatch(filter(boldName));
            }}
          >
            Most Popular
          </White_button>
          <White_button
            name="open_now"
            bold={boldName === "open_now"}
            onClick={() => {
              setBoldName("open_now");
              dispatch(filter(boldName));
            }}
          >
            Open Now
          </White_button>
          <White_button
            name="map_view"
            bold={boldName === "map_view"}
            onClick={() => setBoldName("map_view")}
          >
            Map View
          </White_button>
        </div>
      </div>

      <div className="filters_second_row">
        <div className="buttons_second_row">
          <White_button>
            Price Range{" "}
            <img src="assets/icons/rest_page_icons/arrow_down.svg" />
          </White_button>
          <White_button>
            Distance <img src="assets/icons/rest_page_icons/arrow_down.svg" />
          </White_button>
          <White_button>
            Rating <img src="assets/icons/rest_page_icons/arrow_down.svg" />
          </White_button>
        </div>
      </div>

      <div className="restaurants_grid">
        {restaurants.map((restaurant: any) => {
         const chef = chefs.find((chef:any) => chef.restaurant_ids.includes(restaurant.id) )
         const chef_name = `${chef?.first_name} ${chef?.last_name}`
        return(<>
          <NavLink to={`/restaurants/${restaurant.id}`}>
          <Card class="rest"
            img={restaurant.img_url}
            name={restaurant.name}
            chefName={
              
              chef_name
            }
            rating={restaurant.rating}
          /></NavLink></>
        )})}
      </div>

      <Footer />
    </>
  );
};

export default Restaurants;
