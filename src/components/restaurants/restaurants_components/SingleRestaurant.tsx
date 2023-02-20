import React, {useState } from "react";
import Footer from "../../homepage/hp-components/footer/Footer";
import Navbar from "../../navbar/Navbar";
import { Clean_button } from "../../../typs/buttons/Styled_buttons";
import "./SingleRestaurant.css";
import { useSelector } from "react-redux";
import Card from "../../homepage/hp-components/card/Card";
import { useParams } from "react-router-dom";
import Modal from "../../modal/Modal";

const SingleRestaurant: React.FC = () => {
  const dishes = useSelector((state: any) => state.dishes.value);
  const chefs = useSelector((state: any) => state.chefs.value);
  const restaurants = useSelector((state: any) => state.restaurants.value);
  const rest_id = (useParams()["single"] as unknown as number);
  const specific_rest = restaurants.find(
    (rest: any) => rest.id == rest_id
  );
  const chef = chefs.find((chef: any) =>
    chef.restaurant_ids.includes(Number(rest_id))
  );
  const chef_name = `${chef?.first_name} ${chef?.last_name}`;

  const [showModal, setShowModal] = useState(false);
  const [DishIdForModal, setDishIdForModal] = useState(0);
  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {specific_rest && (
        <>
          <Navbar />
          <div className="rest_details">
            <img src={specific_rest.img_url} alt="rest_img" />
            <div className="chef_n_rest_name">
              <h3>{specific_rest.name}</h3>
              <h2>{chef_name}</h2>
            </div>
            <h1>
              {specific_rest.hours[0] < new Date().getHours() &&
              specific_rest.hours[1] > new Date().getHours()
                ? "Open now"
                : "Closed"}
            </h1>

            <div className="single_rest_filters">
              <Clean_button>Breakfast</Clean_button>
              <Clean_button>lunch</Clean_button>
              <Clean_button>dinner</Clean_button>
            </div>
          </div>
          <div className="dishes_grid_div">
            <div className="dishes_grid">
              {specific_rest.dish_ids.map((dish_id: any, index:number) => {
                const dish = dishes[dish_id-1];
                if (dish) {
                  return (
                    <Card
                      key={index}
                      onclick={() =>{ 
                        setDishIdForModal(dish_id)
                        setShowModal(true)
                      }}
                      class="small_dish"
                      img={dish.img_url}
                      name={dish.name}
                      dishDescription={dish.ingredients}
                      price={dish.price}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          <Footer />
          {showModal && (
            <div className="modal-backdrop" >
              <Modal dish={dishes.find((dish:any) => dish.id == DishIdForModal)} show={showModal} onclick={handleCloseModal} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default SingleRestaurant;
