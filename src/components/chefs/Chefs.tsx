import React from "react";
import { White_button } from "../../typs/buttons/Styled_buttons";
import Chef_img_card from "../homepage/hp-components/Chef_img_card/Chef_img_card";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import data from "../../data/data.json"
import "./Chefs.css";


const Chefs: React.FC = () => {
      return (<>
        <Navbar />

        <div className="filters">
          <div className="buttons">
            <White_button>All</White_button>
            <White_button>New</White_button>
            <White_button>Most Viewed</White_button>
          </div>
        </div>

        <div className="chefs_grid_div">
        <div className="chefs_grid">
  {data.chefs.map((chef) => (
    <Chef_img_card
      layout="chef_page"
      chef_f_name={chef.first_name}
      chef_l_name={chef.last_name}
      chef_img_src={chef.img_url}
    />
  ))}
</div>

        </div>
      <Footer />
        </>
      )
    }

export default Chefs;