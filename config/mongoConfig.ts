import * as Mongoose from "mongoose";
import * as dotenv from "dotenv";

export default new class MongoDBConnection {
    async dbConnect() {
        dotenv.config()
        const mongoUrl = process.env.DB_CONN_STRING as string;
        Mongoose.connect(mongoUrl)
        .then(() => console.log("Mongoo DB Connected"))
        .catch((error:any) => console.log(error))
        
    }
}