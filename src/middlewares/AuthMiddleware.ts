import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from "../config/auth";
interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        companyId: number;
    };
}
const secretKey = authConfig.secret;

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; 

    if (token == null) return res.status(401).json({ error: "Token is required!" }); 


    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ error:  "Invalid token. We'll try to assign a new one on next request" }); 
        req.body.userAuth = user as { id: number; email: string; companyId: number }; 
        next();
    });
};
