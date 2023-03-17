import express, { Request, Response } from "express";
import { getAllChefs , createNewChef } from "../controllers/chef.controller";

const chefRouter = express.Router();

chefRouter.get("/",getAllChefs);
chefRouter.post("/", createNewChef)
chefRouter.put("/",)


export default chefRouter;
