"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc"; // npm install react-icons
import Link from "next/link";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const params=useSearchParams()
  const callback=params.get('callbackUrl')||'/'
    const router=useRouter()
  const handleRegister =async(e) => {
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const newUser={
        name,email,password
    }
    const result=await postUser(newUser)
    if(result.acknowledged){
      
        router.push(`/login`)
        signIn('credentials',{email:newUser.email,password:newUser.password,callbackUrl:callback})
          alert("Registation successful .please login");


    }
  };

  const handleGoogleRegister = () => {
    console.log("Registering with Google...");
  };

  return (
    <div className="flex min-h-screen items-center mt-20 justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">Join Hero kidz today</p>
        </div>

        {/* Registration Form */}
        <form className="mt-8 space-y-5" onSubmit={handleRegister}>
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                placeholder="name@example.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className=" w-full btn btn-primary"
          >
            Register Now
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
         
        </div>

        {/* Google Register Button */}
        <button
          onClick={handleGoogleRegister}
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-600 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
