import React from "react";
import ICard from "../../../../typs/interfaces/ICard";
import "./Card.css";


const Card: React.FC<ICard> = (props) => {
      return (<div className={`card ${props.class}`}>
        <img className="card_img" src={props.img} /> 
        <div className="card_bottom_div">
          <h3>{props.name}</h3>
          {props.icons ? <section className="icons_section">{ props.icons?.map((icon:string) => <img className="icon" src={icon} />) } </section>: null }
          <h2>{props.chefName ? props.chefName : props.dishDescription}</h2>
          {props.rating ? <section>{<img className="rating" src={"/assets/icons/rating_svgs/rate-" + props.rating.toString() + ".svg"} />}</section> : null }
          {props.price ? <div className="pricing"><hr /><p>₪{props.price}</p><hr /></div> : null}
        </div>
      </div>
      )
    }

export default Card;