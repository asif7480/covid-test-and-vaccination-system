import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must contain atleast 6 letters.")
})
function Login() {

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(loginSchema)
  })
  const handleLogin = async(data) => {
    console.log(data)
  }
  return (
    <>
      <div className="h-screen flex ">
        <div className="w-2/3 max-lg:w-screen">
          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col items-center">
            <h2 className="text-center pt-20 mb-10 text-3xl sm:text-4xl  ">Login Form</h2>
            <div className="my-5">
              <input
                type="text"
                placeholder="john@gmail.com"
                className="w-full sm:w-96 input"
                { ...register("email") }
              />
              <p className="text-red-600">{ errors.email?.message}</p>
            </div>

            <div className="my-5">
              <input
                type="password"
                placeholder="*************"
                className="w-full sm:w-96 input"
                { ...register("password") }
              />
              <p className="text-red-600">{ errors.password?.message}</p>
            </div>

            <div className="my-5">
              <input type="submit" value="login" className="btn-primary" />
              <Link to={`/register`} className='text-blue-500 mx-5 underline underline-offset-2'>Don't have an account</Link>
            </div>
          </form>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img src="https://images.pexels.com/photos/3786166/pexels-photo-3786166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-screen h-full" />
        </div>
      </div>
    </>
  )
}

export default Login