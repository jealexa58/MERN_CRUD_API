import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js';

//register
export const register = async(req, res) => {
    const {email,password,username}= req.body
    
    try {

        const passwordHash = await bcrypt.hash(password, 10) //para encriptar la contraseña
        const newUser = new User({
            username,
            email,
            password: passwordHash,
        })
        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id});
        
        res.cookie('token',token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updateAt: userSaved.updatedAt,
        })

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
//login
export const login = async (req, res) => {
    const {email,password}= req.body;
    
    try {
        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, userFound.password); //comparando la contraseña de req body con la contraseña del user.findOne
        if(!isMatch) return res.status(400).json({message: "incorrect password"});

        const token = await createAccessToken({id: userFound._id});
        
        res.cookie('token',token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updateAt: userFound.updatedAt,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//Logaut
export const logout = (req, res)=> {
    res.cookie('token', '', {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

// rutas protegidas
export const profile = async ( req, res)=>{
    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json({message: "User not found"});
    
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
    
    })
}