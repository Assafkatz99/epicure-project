import React from "react";
import { White_button } from "../../typs/buttons/Styled_buttons";
import Card from "../homepage/hp-components/card/Card";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import "./restaurants.css";


const Restaurants: React.FC = () => {
      return (<>
        <Navbar />

        <div className="filters_first_row">
          <div className="buttons_first_row">
            <White_button>All</White_button>
            <White_button>New</White_button>
            <White_button>Most Popular</White_button>
            <White_button>Open Now</White_button>
            <White_button>Map View</White_button>
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
        {
        (() => {
          let  restaurants = [];
          for (let i = 0; i < 10; i++) {
            restaurants.push(<Card class="rest" img="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" name="Rest1" chefName="Eran the chef" rating={"5"} />);
          }
          return restaurants;
        })()
      }
        </div>

      <Footer />
        </>
      )
    }

export default Restaurants;