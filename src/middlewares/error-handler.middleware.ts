import {CustomError} from "@/errors/custom-abs.error"
import { NextFunction, Request, Response } from "express"

const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send(err.serializeErrors())
    }
    return res.status(400).send([{
        message: "Something went wrong. Try Again"
    }])
}

export {errorHandler}