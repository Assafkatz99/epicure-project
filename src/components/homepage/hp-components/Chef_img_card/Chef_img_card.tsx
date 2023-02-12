import React from "react";
import "./Chef_img_card.css";

interface IChef_card {
    chef_f_name :string,
    chef_l_name :string,
    chef_img_src : string
}

const Chef_img_card: React.FC <IChef_card> = (props) => {
      return (<div className="chef_card">
        <img className="chef_img_card" src={props.chef_img_src} />
        <section className="chef_name">{props.chef_f_name +" "+ props.chef_l_name}</section>
        </div>
      )
    }

export default Chef_img_card;











