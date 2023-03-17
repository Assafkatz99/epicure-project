import express, { Request, Response } from "express";
import { getAllChefs } from "../controllers/chef.controller";
import { createChef } from "../services/chefs.service";

const chefRouter = express.Router();

chefRouter.get("/",getAllChefs);
chefRouter.post("/", createChef)
chefRouter.put("/",)


export default chefRouter;
