import React from "react";
import "./Icons.css";


const Icons: React.FC = () => {
      return (<div className="grey_icons_div">
            <span>THE MEANING OF OUR ICONS:</span>
            <div className="icons_div">
                {["isSpicy","isVegitarian","isVegan"].map((e) => 
                <section className={e}>
                    <img src={'assets/icons/dishes_types_icons/' + e + ".svg"} alt="icon_source"/>
                    <p>{e.slice(2)}</p>
                </section>
                )}
            </div>
        </div>
      )
    }

export default Icons;