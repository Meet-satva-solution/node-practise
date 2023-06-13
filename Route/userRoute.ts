import Express from "express";
import userController from "../Controller/userController";
const router = Express.Router();

router.post("/saveUser", userController.saveUser);
router.get("/getuser", userController.getUser);
router.get("/sortBy", userController.getData);

export default router;
