import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const registerSchema = z.object({
  username: z.string().min(1, "Username is required."),
  email: z.string().email(),
  password: z.string().min(6, "Password must be atleast 6 digits"),
  // role: z.enum(['patient', 'hospital'])
  role: z.string().min(1, "Role is required.")
})

function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  })
  
  const handleRegister = async(data) => {
    console.log(data)
  }
  return (
    <>
      <div className="h-screen flex flex-row-reverse">
        <div className="w-2/3 max-lg:w-screen">
          <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col items-center">
            <h2 className="text-center pt-20 mb-10 text-3xl sm:text-4xl">Register Form</h2>
            <div className="my-5">
              <input
                type="text"
                placeholder="john doe"
                className="w-full sm:w-96 input"
                {...register("username")}
              />
              <p className='text-red-600'>{ errors.username?.message }</p>
            </div>

            <div className="my-5">
              <input
                type="text"
                placeholder="john@gmail.com"
                className="w-full sm:w-96 input"
                {...register("email")}
              />
              <p className='text-red-600'>{ errors.email?.message }</p>
            </div>

            <div className="my-5">
              <input
                type="password"
                placeholder="*************"
                className="w-full sm:w-96 input"
                {...register("password")}
              />
              <p className='text-red-600'>{ errors.password?.message }</p>
            </div>

            <div className="my-5">
              <select
                className="w-full sm:w-96 input"
                id=""
                {...register("role")}
              >
                <option value="">Select Role</option>
                <option value="patient">Patient</option>
                <option value="hospital">Hospital</option>
              </select>
              <p className='text-red-600'>{ errors.role?.message }</p>
            </div>

            <div className="my-5">
              <input type="submit" value="Register" className="btn-primary" />
              <Link to={`/login`} className='text-blue-500 mx-5 underline underline-offset-2'>Aready have an account</Link>
            </div>
          </form>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img src="https://images.pexels.com/photos/8413207/pexels-photo-8413207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-screen h-full" />
        </div>
      </div>
    </>
  )
}

export default Register