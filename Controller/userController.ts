import { Request, Response } from "express";
import User from "../Schema/userSchema";
import { ResponseModel } from "../Model";

const saveUser = async (req: Request, res: Response) => {
  // const { name, email, password } = req.body;
  // const nameU = req.body.name;
  const user = new User(req.body)
  try {
    // let userObj = {
    //   email: email,
    //   name: name,
    //   password: password,
    // };
    // let userObjs = new User()
    // userObjs.email = email
    // userObjs.name = name
    // userObjs.password = password
    let resp= await user.save();

    // let userData = await User.create(userObj);
    let response = new ResponseModel();
    response.data = resp;
    response.status = 201;
    response.message = "User created successfully";
    res.status(201).json(response);
  } catch (error:any) {
    let response = new ResponseModel();
    response.data = null;
    response.status = 400;
    response.message = error;
    res.status(400).json(response);
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
