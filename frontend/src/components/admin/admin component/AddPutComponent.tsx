import React, { useEffect, useState } from "react";
import { IChef, IDish, IRestaurant } from "../../../typs/interfaces/slicersInterfaces";
import "./AddPutComponent.css";

interface IAddPutComponent{
type: "chef" | "rest" | "dish";
action: "Add" | "Put";
_id?: string;
}



const AddPutComponent: React.FC<IAddPutComponent> = (props) => {
    const [data,setData] = useState<null | IDish | IRestaurant | IChef |any>(null)
    useEffect(() => {
        switch (props.type) {
          case "chef":
            if (props._id) {
              setData(`Fetch data with the id from chef: ${props._id}`);
            } else {
              setData(null);
            }
            break;
          case "rest":
            if (props._id) {
              setData(`Fetch data with the id from rest: ${props._id}`);
            } else {
              setData(null);
            }
            break;
          case "dish":
            if (props._id) {
              setData(`Fetch data with the id from dish: ${props._id}`);
            } else {
              setData(null);
            }
            break;
        }
      }, [props._id, props.type]);
      return (
        <div className={`add_put_component_main_div ${props.type}`}>
            {props.type === "chef" && <div>
                
              <h3>{data ? "Edit a":"Create new" } chef</h3>
              <div className="inputs">
                
              </div>


                </div>}
            {props.type === "rest" && <div></div>}
            {props.type === "dish" && <div></div>}
        </div>
      )
    }

export default AddPutComponent;