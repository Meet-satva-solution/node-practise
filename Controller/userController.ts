import { Request, Response } from "express";
import User from "../Schema/userSchema";
import { ResponseModel } from "../Model";

const saveUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    let userObj = {
      email: email,
      name: name,
      password: password,
    };
    let userData = await User.create(userObj);
    let response = new ResponseModel();
    response.data = userData;
    response.status = 201;
    response.message = "User created successfully";
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    let user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
  saveUser,
  getUser,
};
