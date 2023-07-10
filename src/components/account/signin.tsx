'use client'
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-hot-toast"
import { signIn }  from 'next-auth/react'
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useState } from "react"


const schema = yup
  .object({
    username: yup.string().trim().required().label('Username'),
    password: yup.string().trim().required().label('Password'),
  })
  .required()

interface iForm {
    username:string,
    password: string
}


const Signin = () => {
    const router = useRouter()
    const [ isLoading, setIsLoading ] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm<iForm>({
        resolver: yupResolver(schema),
      })

      
      const onSubmit:SubmitHandler<iForm> = async (data) => {
        console.log(data)
        setIsLoading(true)
        const response = await signIn("credentials", {
            username: data.username,
            password: data.password,
            redirect: false,
            callbackUrl: '/'
        }
        );
        if (!response?.error ) {
            toast.success(`You logged in successfully.`)
            reset()
            router.push('/')
        }else{
            toast.error(`You enter an invalid username or password.`)
        }

        setIsLoading(false)
      }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className="flex flex-col text-lef w-full mb-10 p-4">
                    <h1 className="text-lg font-bold tracking-widest">Sign Up / User Registeration</h1>
                    <p className="text-sm tracking-widest">*Please fill all the required fields to sign up your account.</p>
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 w-full" htmlFor="username">Username* <span className="float-right text-sm text-red-500 font-normal">{errors.username?.message}</span></label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" {...register("username")} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password* <span className="float-right text-sm text-red-500 font-normal">{errors.password?.message}</span></label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password" {...register("password")}/>
                </div>


                <Button disabled={isLoading} variant={'default'}>
                    { isLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign In
                </Button>
        </form>
    )
}
export default Signin;