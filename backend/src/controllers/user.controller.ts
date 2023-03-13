import express, { Request, Response } from "express";
import { checkIfUserEmailExists, createUser } from "../services/user.service";
const bcrypt = require('bcrypt')


export const userSignUp = async (req: Request, res: Response) => {
    console.log(req)
  try {
    const { first_name, last_name, email, password } = req.body;

    if (!(email && password && first_name && last_name)) {
      return res.status(400).send("All input is required");
    }

    const oldUser = await checkIfUserEmailExists(email);

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    await createUser({
      first_name: first_name,
      last_name: last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    res.status(201).send("success");
  } catch (err) {
    console.log(err);
  }
};