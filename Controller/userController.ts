import { Request, Response } from "express";
import { ResponseModel } from "../Model";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const saveUser = async (req: Request, res: Response) => {
  try {
    const newUser = await prisma.userlist.create({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });

    // const findUser = await prisma.userlist.findMany({
    //   where: {
    //     name: {
    //       contains: "Mee",
    //     },
    //   },
    // });
    let response = new ResponseModel();
    response.data = newUser;
    response.status = 201;
    response.message = "User created successfully";
    res.status(201).json(response);
  } catch (error: any) {
    let response = new ResponseModel();
    response.data = null;
    response.status = 400;
    response.message = error;
    res.status(400).json(response);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const findUser = await prisma.userlist.findMany();
    res.status(201).json(findUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getData = async (req: Request, res: Response) => {
  try {
    const sortBy = req.query.sortBy;
    type sortStatus = "asc" | "desc";
    const sorted = await prisma.userlist.findMany({
      orderBy: { name: sortBy as sortStatus },
    });
    res.status(201).json(sorted);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default {
  saveUser,
  getUser,
  getData,
};
