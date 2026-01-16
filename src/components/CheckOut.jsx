"use client";

import { createOrder } from "@/actions/server/order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import Swal from "sweetalert2";

const CheckOut = ({ cartItem = [] }) => {
  const totalItem = useMemo(
    () => cartItem.reduce((acc, item) => acc + item.quantity, 0),
    [cartItem]
  );
  const session=useSession()
  const router=useRouter()

  const totalPrice = useMemo(
    () => cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cartItem]
  );

  const handleCheckOut = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const address = form.address.value;
    const notes = form.notes.value;

    const formData = {
      name,
      email,
      phone,
      city,
      address,
      notes,
    };
    const result = await createOrder(formData);
  if(result.success){
    router.push('/')
    Swal.fire('success', 'added','success')
  }else{
    router.push('/cart')
    Swal.fire('error','Something went wrong','error')
  }
  };
  if(session.status=='loading'){
    return <h2>Loading ....</h2>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT: Checkout Form */}
        <div className="flex-[3] bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form
            onSubmit={handleCheckOut}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
              required
              value={session?.data?.user?.name}
              readOnly
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
              value={session?.data?.user?.email}
              readOnly
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="input input-bordered w-full"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full md:col-span-2"
              required
            />

            <textarea
              name="notes"
              placeholder="Order Notes (optional)"
              className="textarea textarea-bordered w-full md:col-span-2"
              rows={4}
            ></textarea>

            {/* PLACE ORDER BUTTON → INSIDE FORM */}
            <button
              type="submit"
              disabled={cartItem.length === 0}
              className={`md:col-span-2 mt-4 py-3 rounded-md text-white text-lg transition
                ${
                  cartItem.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary cursor-pointer hover:bg-primary/90"
                }`}
            >
              Place Order
            </button>
          </form>
        </div>

        {/* RIGHT: Order Summary (Sticky) */}
        <div className="flex-[2] bg-gray-50 p-6 rounded-lg shadow-sm h-fit sticky top-24">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>

          {/* Items */}
          <div className="space-y-3 text-sm">
            {cartItem.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium line-clamp-1">{item.title}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">৳{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          {/* Totals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{totalItem}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Price</span>
              <span className="text-primary">৳{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
