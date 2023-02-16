import React, { useState } from "react";
import { White_button } from "../../typs/buttons/Styled_buttons";
import Chef_img_card from "../homepage/hp-components/Chef_img_card/Chef_img_card";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import data from "../../data/data.json"
import "./Chefs.css";


const Chefs: React.FC = () => {
  
  const [boldName, setBoldName] = useState("all")


      return (<>
        <Navbar />

        <div className="filters">
          <div className="buttons">
          <White_button name="all" bold={boldName === "all"} onClick={() => setBoldName("all")}>All</White_button>         
          <White_button name="new" bold={boldName === "new"} onClick={() => setBoldName("new")}>New</White_button>
          <White_button name="most_viewed" bold={boldName === "most_viewed"} onClick={() => setBoldName("most_viewed")}>Most Viewed</White_button>
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