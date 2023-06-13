import express, { request, response } from "express";
import mongoDBConnection from "../config/mongoConfig";
import router from "../Route/index";
import * as evn from "dotenv";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT;
mongoDBConnection.dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
