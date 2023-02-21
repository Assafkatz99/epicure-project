import ICons from "../../typs/interfaces/ICard";

export interface IChef {
  id: number;
  first_name: string;
  last_name: string;
  about: string;
  img_url: string;
  restaurant_ids: Array<number>;
}

export interface IRestaurant {
  id: number;
  is_favorite: boolean;
  name: string;
  img_url: string;
  hours: Array<number>;
  address: string;
  rating: number;
  dish_ids: Array<number>;
  opening_year: number;
}

export interface IDish {
  id: number;
  name: string;
  img_url: string;
  changes: Array<string>;
  ingredients: Array<string>;
  price: number;
  icons: ICons;
  sides: Array<string>;
  is_signature: boolean;
}
