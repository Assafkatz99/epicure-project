import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Clean_button } from "../../typs/buttons/Styled_buttons";
import Footer from "../homepage/hp-components/footer/Footer";
import Navbar from "../navbar/Navbar";
import ShoppingBag from "../navbar/navbar components/shopping bag component/ShoppingBag";
import AddPutComponent from "./admin component/AddPutComponent";
import "./AdminSystem.css";

const AdminSystem: React.FC = () => {
  const [boldName, setBoldName] = useState("Chefs");
  const chefs = useSelector((state: RootState) => state.chefs.value);
  const restaurants = useSelector(
    (state: RootState) => state.restaurants.value
  );
  const dishes = useSelector((state: RootState) => state.dishes.value);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="admin_page">
      <section>
        <Navbar />
        <div className="admin_system_div">
          <div className="admin_buttons">
            <Clean_button
              name="Chefs"
              bold={boldName === "Chefs"}
              onClick={() => setBoldName("Chefs")}
            >
              Chefs
            </Clean_button>
            <Clean_button
              name="Restaurants"
              bold={boldName === "Restaurants"}
              onClick={() => setBoldName("Restaurants")}
            >
              Restaurants
            </Clean_button>
            <Clean_button
              name="Dishes"
              bold={boldName === "Dishes"}
              onClick={() => setBoldName("Dishes")}
            >
              Dishes
            </Clean_button>
          </div>
          {boldName === "Chefs" && (
            <div className="Chefs_table tables">
              <table>
                <tr style={{ background: "#93B1A7" }}>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th style={{ width: "200px" }}>About</th>
                  <th>Img_URL</th>
                  <th>Restaurants Ids</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
                {chefs
                  .slice()
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((chef) => {
                    return (
                      <tr>
                        <th>{chef.id}</th>
                        <th>{chef.first_name}</th>
                        <th>{chef.last_name}</th>
                        <th
                          style={{
                            minWidth: "300px",
                            fontSize: "10px",
                            whiteSpace: "normal",
                          }}
                        >
                          {chef.about}
                        </th>
                        <th>
                          <a
                            href={chef.img_url}
                            target="_blank"
                            style={{
                              color: "blue",
                              fontSize: "12px",
                              textDecoration: "underline",
                            }}
                          >
                            {chef.img_url}
                          </a>
                        </th>
                        <th>{chef.restaurant_ids.join(", ")}</th>
                        <th>
                          <button onClick={() => {setShowModal(true)}}>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src="/assets/icons/admin/edit.svg"
                            />
                          </button>
                        </th>
                        <th>
                          <button onClick={() => {}}>
                            <img
                              style={{ width: "30px", height: "30px" }}
                              src="/assets/icons/admin/delete.svg"
                            />
                          </button>
                        </th>
                      </tr>
                    );
                  })}
              </table>
            </div>
          )}
          {boldName === "Restaurants" && (
            <div className="Restaurants_table tables">
              <table>
                <tr style={{ background: "#93B1A7" }}>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Hours</th>
                  <th>Is favorite</th>
                  <th>Address</th>
                  <th>Rating</th>
                  <th>Dish Ids</th>
                  <th>Opening year</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
                {restaurants
                  .slice()
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((rest) => {
                    return (
                      <tr>
                        <th>{rest.id}</th>
                        <th
                          style={{
                            minWidth: "160px",
                            fontSize: "15px",
                            whiteSpace: "normal",
                          }}
                        >
                          {rest.name}
                        </th>
                        <th>
                          {rest.hours.map((item) => `${item}:00`).join(" - ")}
                        </th>
                        <th>{rest.is_favorite ? "True ✔️" : "False ❌"}</th>
                        <th
                          style={{
                            minWidth: "200px",
                            fontSize: "10px",
                            whiteSpace: "normal",
                          }}
                        >
                          {rest.address}
                        </th>
                        <th>
                          {"★".repeat(rest.rating)} ({rest.rating})
                        </th>
                        <th style={{ fontSize: "13px", whiteSpace: "normal" }}>
                          {rest.dish_ids.join(", ")}
                        </th>
                        <th>{rest.opening_year}</th>
                        <th>
                          <button onClick={() => {}}>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src="/assets/icons/admin/edit.svg"
                            />
                          </button>
                        </th>
                        <th>
                          <button onClick={() => {}}>
                            <img
                              style={{ width: "30px", height: "30px" }}
                              src="/assets/icons/admin/delete.svg"
                            />
                          </button>
                        </th>
                      </tr>
                    );
                  })}
              </table>
            </div>
          )}
          {boldName === "Dishes" && (
            <div className="Dishes_table tables">
              <table>
                <tr style={{ background: "#93B1A7" }}>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Img_Url</th>
                  <th>Changes</th>
                  <th>ingredients</th>
                  <th>price</th>
                  <th>Icons</th>
                  <th>sides</th>
                  <th>Is signature</th>
                  <th>Dish timing</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
                {dishes
                  .slice()
                  .sort((a, b) => (a.id > b.id ? 1 : -1))
                  .map((dish) => {
                    return (
                      <tr>
                        <th>{dish.id}</th>
                        <th>{dish.name}</th>
                        <th>
                          <a
                            href={dish.img_url}
                            target="_blank"
                            style={{
                              color: "blue",
                              fontSize: "12px",
                              textDecoration: "underline",
                            }}
                          >
                            {dish.img_url}
                          </a>
                        </th>
                        <th
                          style={{
                            fontSize: "13px",
                            whiteSpace: "normal",
                          }}
                        >
                          {dish.changes.join(", ")}
                        </th>
                        <th
                          style={{
                            minWidth: "300px",
                            fontSize: "10px",
                            whiteSpace: "normal",
                          }}
                        >
                          {dish.ingredients.join(", ")}
                        </th>
                        <th>{dish.price}</th>
                        <th style={{ textOverflow: "unset" }}>
                          {Object.entries(dish.icons)
                            .filter((item) => item[0] !== "_id" && item[1] == true)
                            .map((type) => (
                              <img
                                className="admin_table_icons"
                                src={
                                  "assets/icons/dishes_types_icons/" +
                                  type[0] +
                                  ".svg"
                                }
                                alt="icon_source"
                              />
                            ))}
                        </th>
                        <th
                          style={{
                            fontSize: "13px",
                            whiteSpace: "normal",
                          }}
                        >
                          {dish.sides.join(", ")}
                        </th>
                        <th>{dish.is_signature ? "True ✔️" : "False ❌"}</th>
                        <th
                          style={{
                            fontSize: "13px",
                            whiteSpace: "normal",
                          }}
                        >
                          {Object.entries(dish.dishTiming)
                            .map((item) => (item[1] ? item[0] : ""))
                            .filter((item) => item !== "" && item !== "_id")
                            .join(", ")}
                        </th>
                        <th>
                          <button onClick={() => {}}>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src="/assets/icons/admin/edit.svg"
                            />
                          </button>
                        </th>
                        <th>
                          <button onClick={() => {}}>
                            <img
                              style={{ width: "30px", height: "30px" }}
                              src="/assets/icons/admin/delete.svg"
                            />
                          </button>
                        </th>
                      </tr>
                    );
                  })}
              </table>
            </div>
          )}

{showModal && (
              <>
                <div
                  className="backdrop"
                  onClick={() => setShowModal(false)}
                ></div>
                <div className="modalAddingEditing">
                <AddPutComponent type={"chef"} action="Add"/>
                </div>
              </>
            )}

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminSystem;
