import express, { Request, Response } from "express";
import User from "../Schema/userSchema"

const app = express();

const saveUser = async (req: Request, res: Response) => {
//   const user = new User(req.body);
//   console.log(user);
  
  try {
    let user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

app.post('/save')

export default {
    saveUser
}