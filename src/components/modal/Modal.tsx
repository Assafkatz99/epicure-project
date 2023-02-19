import React from "react";
import "./Modal.css";

const Modal: React.FC<any> = (props: any) => {
  return (
    <div className="grey_screen" onClick={() => {}}>
      <div className="modal">
        <img
        className="dish_img"
          src="https://media.istockphoto.com/id/612373334/photo/cat-made-of-bread-and-vegetables.jpg?s=612x612&w=0&k=20&c=8vVVWd29edKvmVyh7xe2UtHkLskYxyMNPv_Y0DcPUGM="
          alt=""
        />
        <div className="content">
        <h3>adadlksadj</h3>
        <h1>
          sadsada, asddsasda, asddsasd, asdsa, asddsasda, asddsasd, asdsa,
          asddsasd
        </h1>
        <section className="icons_section">
          {Object.entries({
        "isSpicy": true,
        "isVegan": false,
        "isVegitarian": true
      }).map(
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
        <div className="pricing">
            <hr />
            <p>₪{57}</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
