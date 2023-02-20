import React, { useState } from "react";
import Card from "../card/Card";
import "../popular-restaurant/Popular_restaurant.css";
import Modal from "../../../modal/Modal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Popular_dishes: React.FC = () => {
  const dishes = useSelector((state: any) => state.dishes.value);
  const navigation = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [DishIdForModal, setDishIdForModal] = useState(0);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="popular_restaurant">
        <span>SIGNATURE DISH OF:</span>
        <div className="popular_restaurant_cards">
          {dishes
            .filter((dish: any) => dish.is_signature)
            .slice(0, 3)
            .map((dish: any, index: number) => {
              return (
                <Card
                  key={index}
                  onclick={() => {
                    setDishIdForModal(dish.id);
                    setShowModal(true);
                  }}
                  class="dish"
                  img={dish.img_url}
                  name={dish.name}
                  icons={dish.icons}
                  dishDescription={dish.ingredients}
                  price={dish.price}
                />
              );
            })}
        </div>
      </div>
      {showModal && (
        <div className="modal-backdrop">
          <Modal
            dish={dishes.find((dish: any) => dish.id == DishIdForModal)}
            show={showModal}
            onclick={handleCloseModal}
          />
        </div>
      )}
    </>
  );
};

export default Popular_dishes;
