import Express from "express";
import companyController from "../Controller/companyController";
const router = Express.Router();

router.post("/saveCompany", companyController.saveCompany);
// router.get("/getuser", userController.getUser);
// router.get("/sortBy", userController.getData);

export default router;
