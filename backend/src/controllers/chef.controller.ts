import express, { Request, Response } from "express";
import { createChef, getChefs } from "../services/chefs.service";

export const getAllChefs = async (req: Request, res: Response) => {
  try {
    const chefs = await getChefs();
    return res.status(200).json(chefs);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};

export const createNewChef = async (req: Request, res: Response) => {

  try {
    const new_chef = await createChef(req.body);
    return res.status(200).json(new_chef);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};
