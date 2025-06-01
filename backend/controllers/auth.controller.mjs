import asyncHandler from "express-async-handler"
import { User } from "../models/user.model.mjs"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.mjs"
import { ErrorResponse } from "../utils/ErrorResponse.mjs"

/**
 * @desc    Register a new user
 * @route   POST /api/users/register
 * @access  Public
 */
const register = asyncHandler( async(request, response) => {
    const { name, email, password, role } = request.body
    if(!name || !email || !password || !role){
        response.status(400)
        throw new Error(`Input all fields.`)
    }
    const userExists = await User.findOne({ email })
    
    if(userExists){
        throw new ErrorResponse(401, `Already Registered.`)
    }

    const hashPassword = await bcrypt.hash(password, 10)
    const user = new User({
        name, email, password:hashPassword, role
    })

    await user.save()

    response.status(201).json({ 
        message: "User registered successfully.",
        user
    })
})

/**
 * @desc    Login a user
 * @route   POST /api/users/login
 * @access  Public
 */
const login = asyncHandler( async(request, response) => {
    const { email, password } = request.body
    if(!email || !password){
        throw new ErrorResponse(400, "Input all fields.")
    }

    const user = await User.findOne({ email })
    console.log(user)
    if(!user){
        throw new ErrorResponse(401, "Please register.")
    }

    const matchPassword = await bcrypt.compare(password, user.password)
    if(!matchPassword){
        response.status(401)
        throw new Error("Invalid password")
    }

    if(user.isApproved === "pending"){
        response.status(401)
        throw new Error("You are not approved yet.")
    }

    if(user.isApproved === "reject"){
        response.status(401)
        throw new Error("Your request has been rejected.")
    }

    const token = generateToken(user._id)

    response.status(200).json({
        message: "Login successfully",
        name: user.name,
        email: user.email,
        role: user.role,
        token
    })
})

/**
 * @desc    Get the profile of the logged-in user
 * @route   GET /api/users/profile
 * @access  Private (Authenticated user)
 */ 
const profile = asyncHandler( async(request, response) => {
    const user = await User.findById(request.user._id).select("-password")

    response.status(200).json({
        user
    })
})

export {
    register,
    login,
    profile
}