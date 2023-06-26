//base de datos
import mongoose from "mongoose";

//crear y conectar la base de datos
export const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://localhost/apidb');
        console.log("*** DB is connected ***");
    } catch (error){
        console.log(error);
    }
};
