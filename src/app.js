// importamos express
import Express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import cors from "cors";

import apiRoutes from './routes/api.routes.js';

const app = Express()

app.use(cors({
    origin: 'http://localhost:5173', //Indicación para que solo se comunique con el servidor
}));
app.use(morgan('dev'));
app.use(Express.json());//convertir los req.body en formatos Json o objetos de JS
app.use(cookieParser()); //libreria para guardar las cookies

app.use('/api', apiRoutes); // Utilizando rutas register y login

export default app;