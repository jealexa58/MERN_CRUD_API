/* El token se realiza para que el frondEnd sepa que permisos
tiene un usuario y que puede mostarle, este token se puede enviar a través de una cookie */

import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload){
    return new Promise((resolve,reject)=>{
        jwt.sign(
            payload, 
            TOKEN_SECRET,
            {
            expiresIn: '1d',
            },
            (err, token)=> {
                if (err) reject(err)
                resolve(token) 
            }
        );
    });
}
