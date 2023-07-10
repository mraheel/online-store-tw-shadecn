"use client";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react"

// import { useRouter } from "next/navigation";

const schema = yup
  .object({
    firstName: yup.string().required().trim().label("First name"),
    lastName: yup.string().required().trim().label("Last name"),
    email: yup.string().required().trim().email().label("Email"),
    password: yup.string().required().trim().label("Password"),
    confirmPassword: yup
      .string()
      .required()
      .trim()
      .label("Confirm Password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  })
  .required();

const Signup = () => {
  //   const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  interface iForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<iForm> = async (data) => {
    setIsLoading(true)
    const { confirmPassword, ...dataWithoutConfirmPassword } = data;
    const updatedData = {
      ...dataWithoutConfirmPassword,
    };

    const res = await fetch(`./api/signup`, {
      method: "POST",
      body: JSON.stringify(updatedData),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (res.status === 200 && !result.error) {
      reset();
      toast.success(`Your account successfully created.`);
    } else {
      toast.error(result.message);
    }
    setIsLoading(false)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col text-lef w-full mb-10 p-4">
        <h1 className="text-lg font-bold tracking-widest">
          Sign Up / User Registeration
        </h1>
        <p className="text-sm tracking-widest">
          *Please fill all the required fields to sign up your account.
        </p>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstname"
        >
          First Name*{" "}
          <span className="float-right text-sm text-red-500 font-normal">
            {errors.firstName?.message}
          </span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstname"
          type="text"
          placeholder="Enter first name"
          {...register("firstName")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastname"
        >
          Last Name*{" "}
          <span className="float-right text-sm text-red-500 font-normal">
            {errors.lastName?.message}
          </span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastname"
          type="text"
          placeholder="Enter last name"
          {...register("lastName")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email*{" "}
          <span className="float-right text-sm text-red-500 font-normal">
            {errors.email?.message}
          </span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Enter email"
          {...register("email")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password*{" "}
          <span className="float-right text-sm text-red-500 font-normal">
            {errors.password?.message}
          </span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password*
          <span className="float-right text-sm text-red-500 font-normal">
            {errors.confirmPassword?.message}
          </span>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
      </div>
      <Button disabled={isLoading} variant={'default'}>
                    { isLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create Account
                </Button>
    </form>
  );
};
export default Signup;
