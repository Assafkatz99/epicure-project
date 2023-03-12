import express, { Request, Response } from "express";
import { getRestaurants } from "../services/restaurants.service";

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
      const chefs = await getRestaurants();
      return res
        .status(200)
        .json(chefs);
    } catch (err: any) {
      console.log(err);
      throw err;
    }
  };