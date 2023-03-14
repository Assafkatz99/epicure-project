import express, { Request, Response } from "express";
import { getAllDishes } from "../controllers/dishes.controller";

const DishRouter = express.Router();

DishRouter.get("/", getAllDishes);

export default DishRouter;
