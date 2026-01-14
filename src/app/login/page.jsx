"use client";

import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"; // npm install react-icons
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import SocialButton from "@/components/SocialButton";


const LoginPage = () => {
  const router=useRouter()
 
    const params=useSearchParams()
  const handleEmailLogin =async (e) => {
    e.preventDefault();
   const form={
    email:e.target.email.value,
    password:e.target.password.value
   }
   const result=await signIn('credentials',{redirect:false, password:form.password,email:form.email,callbackUrl:params.get('callbackUrl')||"/"})
   if(!result.ok){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: " wrong password or email !",
     
    });
   }
   else{
   
     Swal.fire({
       icon: "success",
      
       text: "login successful  !",
     });
     router.push(params.get('callbackUrl')|| '/')

   }


   
  };

  

  return (
    <div className="flex min-h-screen items-center mt-20 justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your details
          </p>
        </div>

        {/* Email Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleEmailLogin}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="you@gmaile.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full "
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Login Button */}
       <SocialButton></SocialButton>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href={`/register?callbackUrl=${params.get('callbackUrl')||'/'}`} className="font-semibold text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
