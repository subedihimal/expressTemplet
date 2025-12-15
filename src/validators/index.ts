import { Request, Response, NextFunction } from "express";
import {  ZodType } from "zod";


export const validateRequestBody = (schema: ZodType)=>{
    return async (req: Request , res: Response, next: NextFunction) =>{
        try{
            schema.parseAsync(req.body);
            console.log("Request Body is valid");
            next(); 
        }catch(error){
            return res.status(400).json({
                message: "Invalid JSON Body",
                error: error,

            });
        }

    }
}
export const validaateQueryParams = (schema: ZodType)=>{
    return async (req: Request , res: Response, next: NextFunction) =>{
        try{
            await schema.parseAsync(req.query);
            console.log("Request Query Parms are valid");
            next(); 
        }catch(error){
            return res.status(400).json({
                message: "Invalid Query Params",
                error: error,

            });
        }

    }
}
