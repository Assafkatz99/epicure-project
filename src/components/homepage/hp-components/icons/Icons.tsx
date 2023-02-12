import React from "react";
import "./Icons.css";


const Icons: React.FC = () => {
      return (<div className="grey_icons_div">
            <span>THE MEANING OF OUR ICONS:</span>
            <div className="icons_div">
                {["Spicy","Vegitarian","Vegan"].map((e) => 
                <section className={e}>
                    <img src={'assets/icons/dishes_types_icons/' + e + ".svg"} />
                    <p>{e}</p>
                </section>
                )}
            </div>
        </div>
      )
    }

export default Icons;