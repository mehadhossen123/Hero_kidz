import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <Link className="flex gap-3 items-center" href={"/"}>
        <Image
          alt="logo-image"
          width={60}
          height={40}
          src={"/assets/logo.png"}
        ></Image>
        <h1 className="text-2xl font-bold ">
          Hero <span className='text-primary'>Kidz</span>
        </h1>
      </Link>
    );
};

export default Logo;