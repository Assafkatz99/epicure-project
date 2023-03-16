import React, { useEffect, useState } from "react";
import { GenericButtons } from "../../../typs/buttons/Styled_buttons";
import {
  IChef,
  IDish,
  IRestaurant,
} from "../../../typs/interfaces/slicersInterfaces";
import "./AddPutComponent.css";

interface IAddPutComponent {
  type: "chef" | "rest" | "dish";
  action: "Add" | "Put";
  _id?: string;
}

const AddPutComponent: React.FC<IAddPutComponent> = (props) => {
  const [data, setData] = useState<null | IDish | IRestaurant | IChef | any>(
    null
  );
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
      {props.type === "chef" && (
        <>
          <h3>{data ? "Edit a" : "Create new"} chef</h3>
          <form
            className="add_put_component_form"
            onSubmit={(event) => {
              event?.preventDefault();
            }}>
            <section>
              <div>First Name</div>
              <input
                placeholder="First Name"
                value={data ? data.first_name : ""}
              />
            </section>
            <section>
              <div>Last Name</div>
              <input
                placeholder="Last Name"
                value={data ? data.last_name : ""}
              />
            </section>
            <section>
              <div>About</div>
              <input placeholder="About" value={data ? data.about : ""} />
            </section>
            <section>
              <div>Image URL</div>
              <input placeholder="Image URL" value={data ? data.img_url : ""} />
            </section>
            <section>
              <div>Restaurants Ids</div>
              <input
                placeholder="Separated by ',' "
                value={data ? data.restaurant_ids : ""}
              />
            </section>

            <GenericButtons type="submit" backgroundColor="grey">
              SUBMIT
            </GenericButtons>
          </form>
        </>
      )}
      {props.type === "rest" && (
        <>
          <h3>{data ? "Edit a" : "Create new"} restaurant</h3>
          <form
            className="add_put_component_form"
            onSubmit={(event) => {
              event?.preventDefault();
            }}>
            <section>
              <div>Name</div>
              <input placeholder="Name" value={data ? data.name : ""} />
            </section>
            <section>
              <div>Image URL</div>
              <input placeholder="Image URL" value={data ? data.img_url : ""} />
            </section>
            <section>
              <div>Hours</div>
              <input
                placeholder="Opening"
                style={{ width: "20%" }}
                value={data ? data.hours : ""}
              />
              {/* need to change it to: data.hours[0] */}
              <p style={{ width: "10%" }}>-</p>
              <input
                placeholder="Closing"
                style={{ width: "20%" }}
                value={data ? data.hours : ""}
              />
              {/* need to change it to: data.hours[1] */}
            </section>
            <section>
              <div>Is Favorite</div>
              <select defaultValue={data ? (data.isFavorite ? "true" : "false") : ""} >
                <option value="true">True ✔️</option>
                <option value="false">False ❌</option>
              </select>
            </section>
            <section>
              <div>Address</div>
              <input placeholder="Address" value={data ? data.address : ""} />
            </section>
            <section>
              <div>Opening year</div>
              <input placeholder="Opening year" value={data ? data.opening_year : ""} />
            </section>
            <section>
              <div>Dish ids</div>
              <input
                placeholder="Separated by ',' "
                value={data ? data.dish_ids : ""}
              />
            </section>
            <section>
              <div>Rating</div>
              <input placeholder="Rating" value={data ? data.rating : ""} />
            </section>

            <GenericButtons type="submit" backgroundColor="grey">
              SUBMIT
            </GenericButtons>
          </form>
        </>
      )}
      {props.type === "dish" && (
          <>
            <h3>{data ? "Edit a" : "Create new"} dish</h3>
            <form
              className="add_put_component_form"
              onSubmit={(event) => {
                event?.preventDefault();
              }}>
            <section>
  <div>Name</div>
  <input placeholder="Name" value={data ? data.name : ""} />
</section>
<section>
  <div>Image URL</div>
  <input placeholder="Image URL" value={data ? data.img_url : ""} />
</section>
<section>
  <div>Changes</div>
  <input placeholder="Separated by ','" value={data ? data.changes : ""} />
</section>
<section>
  <div>Ingredients</div>
  <input placeholder="Separated by ','" value={data ? data.ingredients : ""} />
</section>
<section>
  <div>Price</div>
  <input placeholder="Price" value={data ? data.price : ""} />
</section>
<section>
  <div>
    <span>Vegan </span>
    <select defaultValue={data ? (data.vegan ? "true" : "false") : ""}>
      <option value="true">True ✔️</option>
      <option value="false">False ❌</option>
    </select>
  </div>
  <div>
    <span>Vegetarian </span>
    <select defaultValue={data ? (data.vegetarian ? "true" : "false") : ""}>
      <option value="true">True ✔️</option>
      <option value="false">False ❌</option>
    </select>
  </div>
  <div>
    <span>Spicy </span>
    <select defaultValue={data ? (data.spicy ? "true" : "false") : ""}>
      <option value="true">True ✔️</option>
      <option value="false">False ❌</option>
    </select>
  </div>
</section>
<section>
  <div>Side</div>
  <input placeholder="Side" value={data ? data.sides : ""} />
</section>
<section>
  <div>Is Signature</div>
  <select defaultValue={data ? (data.is_signature ? "true" : "false") : ""}>
    <option value="true">True ✔️</option>
    <option value="false">False ❌</option>
  </select>
</section>
<section>
  <div>
    <span>Breakfast </span>
    <select defaultValue={data ? (data.breakfast ? "true" : "false") : ""}>
      <option value="true">True ✔️</option>
      <option value="false">False ❌</option>
    </select>
  </div>
  <div>
    <span>Lunch </span>
    <select defaultValue={data ? (data.lunch ? "true" : "false") : ""}>
      <option value="true">True ✔️</option>
      <option value="false">False ❌</option>
    </select>
  </div>
  <div>
    <span>Dinner </span>
    <select defaultValue={data ? (data.dinner ? "true" : "false") : ""}>
      <option value="true">True ✔️</option>
      <option value="false">False ❌</option>
    </select>
  </div>
  </section>
              <GenericButtons type="submit" backgroundColor="grey">
                SUBMIT
              </GenericButtons>
            </form>
          </>
      )}
    </div>
  );
};

export default AddPutComponent;
