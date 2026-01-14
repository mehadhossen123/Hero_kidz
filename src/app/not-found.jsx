import Link from 'next/link';
import React from 'react';
import { BiSolidErrorAlt } from "react-icons/bi";

const ErrorPage = () => {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center ">
        <BiSolidErrorAlt size={100} className='text-primary '/>
        <h1 className='text-2xl  md:text-5xl font-bold my-4'>Page Not Found</h1>
        <Link className='btn' href={"/"}>Go to home</Link>
      </div>
    );
};

export default ErrorPage;