import { Request, Response } from "express";
import { ResponseModel } from "../Model";
import { PrismaClient } from "@prisma/client";
import newUserData from "../Repositories/userData"

const prisma = new PrismaClient();

const saveCompany = async (req: Request, res: Response) => {
  try {
    console.log('req.body',req.body);
    
    const newCompany = await prisma.companyList.create({
      data: {
        companyName: req.body.companyName,
        phoneNumber: req.body.phoneNumber,
        userId: req.body.userId
      }
    });

    // const findUser = await prisma.userlist.findMany({
    //   where: {
    //     name: {
    //       contains: "Mee",
    //     },
    //   },
    // });
    // const userData = await prisma.userList.findMany({
    //     where: {
    //         id: {in : req.body.userId},
    //     },
    //     include:{
    //         CompanyList: true
    //     }
    // })
    // console.log('userData',userData);

    const userData = await prisma.companyList.findMany({
      include: {
          user: {
              select: {
                  id: true,
                  name: true,
                  userEmail: true
              }
          }
      }
  })
    
    const company = await newUserData.getuser()
    // const company = await prisma.companyList.findMany({
    //     include: {
    //       user: {
    //         select: {
    //           id: true,
    //           name: true,
    //         }
    //       }
    //     }
    // })
    // // console.log('newCompany',newCompany);
    // console.log('company',company);
    
    // let response = new ResponseModel();              
    // response.data = company;
    // response.status = 201;
    // response.message = "Company created successfully";

    let response = {
        status: 201,
        data: company,
        message: "Company created successfully",
        newCompanyData:null
    }
    res.send(response);
  } catch (error: any) {
    console.log('error',error);
    
    let response = new ResponseModel();
    response.data = null;
    response.status = 400;
    response.message = error;
    res.status(400).json(response);
  }
};
export default {
    saveCompany
  };
  