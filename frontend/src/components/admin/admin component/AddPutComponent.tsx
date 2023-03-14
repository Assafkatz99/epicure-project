import React, { useState } from "react";
import "./AddPutComponent.css";

interface IAddPutComponent{
type: "chef" | "rest" | "dish";
action: "Add" | "Put";
_id?: string;
}



const AddPutComponent: React.FC<IAddPutComponent> = (props) => {
    const [data,SetData] = useState("")
    switch (props.type){
        case "chef":
            if(props._id){
                SetData("Fetch data with the id from chef")
            }else{
                SetData("")
            }
            break;
        case "rest":
            if(props._id){
                SetData("Fetch data with the id from rest")
            }else{
                SetData("")
            }
            break;
        case "dish":
            if(props._id){
                SetData("Fetch data with the id from dish")
            }else{
                SetData("")
            }
            break;
    }
      return (
        <div className={`add_put_component_main_div ${props.type}`}>
            {props.type === "chef" && <div>
                
                

                </div>}
            {props.type === "rest" && <div></div>}
            {props.type === "dish" && <div></div>}
        </div>
      )
    }

export default AddPutComponent;