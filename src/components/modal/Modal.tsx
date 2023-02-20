import React, { useRef, useState } from "react";
import { AddToBagButton } from "../../typs/buttons/Styled_buttons";
import { UnderlineHeadline } from "../../typs/headlines/UnderlineHeadline";
import "./Modal.css";

interface ModalProps {
  show: boolean;
  onclick: () => void;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      props.onclick();
      return;
    }
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {props.show && (
        <div className="grey_screen" onClick={handleClick}>
          <div className="modal" ref={modalRef}>
            <img
              className="dish_img"
              src="https://media.istockphoto.com/id/612373334/photo/cat-made-of-bread-and-vegetables.jpg?s=612x612&w=0&k=20&c=8vVVWd29edKvmVyh7xe2UtHkLskYxyMNPv_Y0DcPUGM="
              alt=""
            />
            <div className="content">
              <h3>adadlksadj</h3>
              <h1>
                sadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
                asddsasdsadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
                asddsasdsadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
                asddsasdsadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
                asddsasdsadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
                asddsasdsadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
                asddsasdsadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
                asddsasd
              </h1>
              <section className="icons_section">
                {Object.entries({
                  isSpicy: true,
                  isVegan: false,
                  isVegitarian: true,
                }).map((icon: any, index: number) =>
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
              <div className="pricing">
                <hr />
                <p>₪{57}</p>
                <hr />
              </div>

              <div className="choose_a_side_div">
                <UnderlineHeadline>Choose a side</UnderlineHeadline>
                <div className="radio-buttons">
                  <label>
                    <input type="radio" name="side" value="white-bread" />
                    White bread
                  </label>
                  <label>
                    <input type="radio" name="side" value="sticky-rice" />
                    Sticky rice
                  </label>
                </div>
              </div>

              <div className="changes_div">
                <UnderlineHeadline>Changes</UnderlineHeadline>
                <div className="checkboxes">
                  <label>
                    <input
                      type="checkbox"
                      name="without-peanuts"
                      value="without-peanuts"
                    />
                    Without peanuts
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="sticky-less-spicy"
                      value="sticky-less-spicy"
                    />
                    Sticky Less spicy
                  </label>
                </div>
              </div>
              <div className="quantity_div">
                <UnderlineHeadline>Quantity</UnderlineHeadline>
                <div className="quantity_controls">
                  <button
                    onClick={() => setQuantity((prev) => prev - 1)}
                    disabled={quantity == 1}  className={quantity === 1 ? "disabled" : ""}
                  >
                    –
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
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
