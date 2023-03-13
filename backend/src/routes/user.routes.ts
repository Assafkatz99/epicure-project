import express, { Request, Response } from "express";
import { userSignUp } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/",userSignUp);

export default userRouter