import React from 'react';
import Logo from './Logo';
import NavLink from './NavLink';
import Link from 'next/link';
import { IoCartOutline } from "react-icons/io5";
import AuthButton from './button/AuthButton';

const Navbar = () => {
    const nav=<>
     <li><NavLink href={"/"}>Home</NavLink></li>
     <li><NavLink href={"/product"}>Product</NavLink></li>
     <li><NavLink href={"/blogs"}>Blogs</NavLink></li>
     <li><NavLink href={"/contact"}>Contact</NavLink></li>
    </>
    return (
      <div>
        <div className="navbar bg-base-100 z-50 top-0  fixed w-full md:w-11/12">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {nav}
              </ul>
            </div>
            <Logo></Logo>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{nav}</ul>
          </div>
          <div className="navbar-end space-x-4">
            <Link href={""} >
              <IoCartOutline className='btn btn-primary ' />
            </Link>
            <AuthButton></AuthButton>
          </div>
        </div>
      </div>
    );
};

export default Navbar;