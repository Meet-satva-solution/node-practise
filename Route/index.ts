import express from "express";
const router = express.Router();
import invoiceRoute from "./invoiceRoute";
import userRoute from "./userRoute";
import companyRoute from "./companyRoute";
router.use("/invoice", invoiceRoute);
router.use("/user", userRoute);
router.use("/company", companyRoute);
export default router;
