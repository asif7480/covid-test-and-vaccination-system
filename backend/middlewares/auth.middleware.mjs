import { User } from "../models/user.model.mjs";
import asyncHandler from 'express-async-handler'
import jwt from "jsonwebtoken"
import { ErrorResponse } from "../utils/ErrorResponse.mjs";

export const auth = asyncHandler( async(request, response, next) => {
    let token = ""
    if(request.headers.authorization && request.headers.authorization.startsWith(`Bearer`)){
        token = request.headers.authorization.split(" ")[1]
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)
        request.user = await User.findById(decoded._id)
        next()
    }

    if(!token){
        throw new ErrorResponse(401, "Token not provided.")
    }
})
