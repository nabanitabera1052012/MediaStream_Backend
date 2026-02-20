// require ("dotenv").config({path: './env'})
import app from "./app.js";

import dotenv from "dotenv"

//import mongoose from "mongoose";
//import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";



dotenv.config({ path: './.env' })


connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
  console.log(`SERVER is running on PORT : ${process.env.PORT}`);
});


})
.catch((err) =>{
    console.log("MONGO db connection failed !!!",err);
})

/*import express from "express"
const app = express()



(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`${
            DB_NAME }`)
            app.on("error", () => {
                console.log("ERRR: ", error);
                throw error
        })  
        

    }   catch (error){
    console.error("ERROR: ", error)
    throw err
}

})() 
*/
 