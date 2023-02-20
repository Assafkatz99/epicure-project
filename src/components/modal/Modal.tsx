import React, { useRef, useState } from "react";
import { AddToBagButton } from "../../typs/buttons/Styled_buttons";
import { UnderlineHeadline } from "../../typs/headlines/UnderlineHeadline";
import IModalProps from "../../typs/interfaces/IModalProps";
import "./Modal.css";

const Modal: React.FC<IModalProps> = (props: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      props.onclick();
      return;
    }
  };

  const [quantity, setQuantity] = useState(1);

  console.log(props.dish);
  return (
    <>
      {props.show && (
        <div className="grey_screen" onClick={handleClick}>
          <div className="modal" ref={modalRef}>
            <img
              className="dish_img"
              src={props.dish.img_url}
              alt={`img of ${props.dish.name}`}
            />
            <div className="content">
              <h3>{props.dish.name}</h3>
              <h1>{props.dish.ingredients.join(", ")}</h1>
              <section className="icons_section">
                {Object.entries(props.dish.icons).map(
                  (icon: any, index: number) =>
                    icon[1] == true ? (
                      <img
                        key={index}
                        className="icon"
                        src={`/assets/icons/dishes_types_icons/${icon[0]}.svg`}
                        alt="icons"
                      />
                    ) : null
                )}
              </section>
              <div className="dish_pricing">
                <hr />
                <p>₪{props.dish.price}</p>
                <hr />
              </div>

              <div className="choose_a_side_div">
                <UnderlineHeadline>Choose a side</UnderlineHeadline>
                <div className="radio-buttons">
                  {props.dish.sides.length>1 ? props.dish.sides.map((side) => (
                    <label>
                      <input
                        type="radio"
                        name="side"
                        value={side.split(" ").join("-")}
                      />
                      {side}
                    </label>
                  )):
                  <p className="center">There are no available sides</p>
                  }
                </div>
              </div>

              <div className="changes_div">
                <UnderlineHeadline>Changes</UnderlineHeadline>
                <div className="checkboxes">
                  {props.dish.changes.length>1 ? props.dish.changes.map((change) => (
                    <label>
                      <input
                        type="checkbox"
                        name={change.split(" ").join("-")}
                        value={change.split(" ").join("-")}
                      />
                      {change}
                    </label>
                  )): 
                  <p className="center">There are no available changes</p>
                  }
                </div>
              </div>
              <div className="quantity_div">
                <UnderlineHeadline>Quantity</UnderlineHeadline>
                <div className="quantity_controls">
                  <button
                    onClick={() => setQuantity((prev) => prev - 1)}
                    disabled={quantity == 1}
                    className={quantity === 1 ? "disabled" : ""}
                  >
                    –
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((prev) => prev + 1)}>
                    +
                  </button>
                </div>
              </div>

              <AddToBagButton>ADD TO BAG</AddToBagButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
