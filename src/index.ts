import express, {request, response} from "express";
import mongoDBConnection from '../database/mongoConfig';
import router from "../Route/index";
import * as evn from "dotenv"

const app = express();
app.use(router);
const port = process.env.PORT;
mongoDBConnection.dbConnect();



app.listen(3000, () => {
    console.log("server listening on port 3000");
  });