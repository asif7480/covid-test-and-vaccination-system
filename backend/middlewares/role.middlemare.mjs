import { ErrorResponse } from "../utils/ErrorResponse.mjs"

export const checkRole = (...allowedRole) => {
    return (request, response, next) => {
        try{
            const userRole = request.user.role
            if(!userRole){
                throw new ErrorResponse(401, "Access denied. No role assinged.")
            }

            if(!allowedRole.includes(userRole)){
                throw new ErrorResponse(401, "Access denied. Unauthorized.")
            }

            next()
        }catch(err){
            ErrorResponse(401, err)
        }
    }
}