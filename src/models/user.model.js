//estructura fija del modelo de la base de datos
import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true, //requerido
        trim: true //validar lipiar espacios

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})
export default mongoose.model('User',userSchema)