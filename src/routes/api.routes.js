import { Router } from "express";
import {login, register, logout, profile} from '../controllers/api.controller.js';
import { apiRequired } from "../middlewares/validateToken.js";


const router = Router()
// ruta del registro
router.post('/register', register);
//ruta del login
router.post('/login', login);
// ruta de salida
router.post('/logout', logout);
// ruta del la validación del token
router.get('/profile', apiRequired,profile);



export default router
