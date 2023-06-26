// importamos express
import Express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser"

import apiRoutes from './routes/api.routes.js';

const app = Express()

app.use(morgan('dev'));
app.use(Express.json());//convertir los req.body en formatos Json o objetos de JS
app.use(cookieParser()); //libreria para guardar las cookies

app.use('/api', apiRoutes); // Utilizando rutas register y login

export default app;