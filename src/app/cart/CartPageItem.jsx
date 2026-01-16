"use client";

import { deleteItemFromCart, quantityDecreaseDb, quantityIncreaseDb } from "@/actions/server/cart";
import Image from "next/image";
import { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartPageItem = ({ item, removeItem, updateQuantity }) => {
  const [isLoading,setIsLoading]=useState(false)
  const { title, image, price, quantity, _id } = item;
  const handleDeleteItem = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteItemFromCart(_id);
        if (result.success) {
          removeItem(_id);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "opps",
            text: "Something went wrong .",
            icon: "error",
          });
        }
      }
    });
  };
  const onIncrease=async()=>{
    setIsLoading(true)
    const result=await quantityIncreaseDb(_id,quantity)
    if(result.success){
      Swal.fire('success','increased','success')
      updateQuantity(_id, quantity+1);
    }
    setIsLoading(false)
  }
  const onDecrease=async()=>{
    setIsLoading(true)
    const result=await quantityDecreaseDb(_id,quantity)
    if(result.success){
      Swal.fire('success','decreased','success')
      updateQuantity(_id, quantity-1);
    }
    setIsLoading(false)
  }

  return (
    <div className="card card-side bg-base-100 shadow-md p-4 flex flex-col md:flex-row gap-4">
      {/* Image */}
      <figure className="w-full md:w-32 h-32 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </figure>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-primary font-bold">৳ {price}</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-2">
          <button
             onClick={onDecrease}
             disabled={quantity==1|| isLoading}
            className="btn btn-sm btn-outline"
          >
            <FaMinus />
          </button>

          <span className="font-semibold">{quantity}</span>

          <button
             onClick={onIncrease}
             disabled={quantity==10 || isLoading}
            className="btn btn-sm btn-outline"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <div className="flex items-center">
        <button
          onClick={handleDeleteItem}
          className="btn btn-error btn-sm text-white"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartPageItem;
