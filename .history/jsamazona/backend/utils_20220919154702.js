import config from "./config";
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        _id, user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,        
    }
    config.jWT_SECRET
    )
}