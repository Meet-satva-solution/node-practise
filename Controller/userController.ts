import { Request, Response } from "express";
import User from "../Schema/userSchema";
import { ResponseModel } from "../Model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    // let resp= await user.save();
    const newUser =  await prisma.userlist.create({
      data: {
        name : req.body.name,
        email : req.body.email
      }
    })

    const findUser = await prisma.userlist.findMany({
      where : {
        name : {
          contains: "Mee"
        }
      }
    })


    // let userData = await User.create(userObj);
    let response = new ResponseModel();
    response.data = findUser
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
    const findUser = await prisma.userlist.deleteMany({
      where : {
        name : "Meet"
      }
    })

    let user = await User.find();
    res.status(201).json(findUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getData= async (sortBy: string = '' ) => {
 const sorted = await prisma.userlist.findMany({
  // where: {
  //   name : "Meet"
  // },
  orderBy :[ {
    name: 'desc'
  }]
 })
}

export default {
  saveUser,
  getUser,
  getData
};
