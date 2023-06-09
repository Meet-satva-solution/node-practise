import Express from "express";
import userController from "../Controller/userController";
const router = Express.Router();

router.post("/saveUser", userController.saveUser);

export default router;