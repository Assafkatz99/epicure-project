import React from "react";
import { White_button } from "../../typs/buttons/Styled_buttons";
import Card from "../homepage/hp-components/card/Card";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import data from "../../data/data.json"
import "./restaurants.css";


const Restaurants: React.FC = () => {
      return (<>
        <Navbar />

        <div className="filters_first_row">
          <div className="buttons_first_row">
            <White_button name="all">All</White_button>
            <White_button name="new">New</White_button>
            <White_button name="most_popular">Most Popular</White_button>
            <White_button name="open_now">Open Now</White_button>
            <White_button name="map_view">Map View</White_button>
          </div>
        </div>

        <div className="filters_second_row">
          <div className="buttons_second_row">
            <White_button>Price Range  <img src='assets/icons/rest_page_icons/arrow_down.svg' /></White_button>
            <White_button>Distance  <img src='assets/icons/rest_page_icons/arrow_down.svg' /></White_button>
            <White_button>Rating  <img src='assets/icons/rest_page_icons/arrow_down.svg' /></White_button>
          </div>
        </div>

        <div className="restaurants_grid">
  {data.restaurants.map((restaurant) => (
    <Card
      class="rest"
      img={restaurant.img_url}
      name={restaurant.name}
      chefName={data.chefs.find((chef) => chef.restaurant_ids.includes(restaurant.id))?.first_name + " " + data.chefs.find((chef) => chef.restaurant_ids.includes(restaurant.id))?.last_name}
      rating={restaurant.rating}
    />
  ))}
</div>


      <Footer />
        </>
      )
    }

export default Restaurants;