import express, { Request, Response } from "express";
import { getAllChefs } from "../controllers/chef.controller";

const chefRouter = express.Router();

chefRouter.get("/",getAllChefs);

export default chefRouter