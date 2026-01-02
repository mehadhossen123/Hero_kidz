import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
   
    <div className="flex flex-col py-24  md:flex-row items-center justify-between gap-5 w-full">
   
      <div className="flex-1 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The Best Toys for Your Little{" "}
          <span className="text-primary"> Hero’s Future</span>
        </h1>
        <p className=" leading-20 opacity-80 text-sm">Buy every toy upto 15% discount</p>
        <button className="btn btn-primary btn-outline">Explore Toy</button>
      </div>

   
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          alt="buy-product"
          width={500}
          height={400}
          src={"/assets/hero.png"}
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
