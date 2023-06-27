import{z} from 'zod';
// validación de los datos ingresados por el usuario en el registro
export const registerSchema = z.object({
    usarname: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6,{
        message: 'Password must be at least 6 characters'
    }),
});

// validación de los datos ingresados en login
export const loginSchema = z.object({
    email: z.string({
        required_error: "email is required",
    }).email({
        message: "invalid email",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6,  {
        message: "Password must be at least 6 characters",
    }),
});
