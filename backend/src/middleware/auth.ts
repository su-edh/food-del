import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface decodedToken extends JwtPayload{
    id: string;
}

const authMiddleware = async (req: Request,res: Response,next: NextFunction) => {
    const token  = req.headers['token'];
    if (!token) {
        res.status(400).json({success: false, message: "Not Authorized Login Again"});
        return; 
    }

    try {
        const token_decode = jwt.verify(token as string,process.env.JWT_SECRET as string) as decodedToken;
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

export default authMiddleware;