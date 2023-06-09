import express from "express";
const router = express.Router();
import invoiceRoute from "./invoiceRoute";
import userRoute from "./userRoute";
router.use("/invoice", invoiceRoute);
router.use("/user", userRoute);
export default router;
