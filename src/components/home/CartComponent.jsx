"use client";

import CartPageItem from "@/app/cart/CartPageItem";
import Link from "next/link";
import React, { useMemo, useState } from "react";

const CartComponent = ({ cartItems = [] }) => {
  const [items, setItems] = useState(cartItems);

  const totalItem = useMemo(
    () => items.reduce((acm, item) => acm + item.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () => items.reduce((acm, item) => acm + item.quantity * item.price, 0),
    [items]
  );

  const removeItem = (id) => {
    setItems((preItem) => preItem.filter((i) => i._id !== id));
  };

  const updateQuantity = (id, q) => {
    setItems((preItem) =>
      preItem.map((item) => (item._id === id ? { ...item, quantity: q } : item))
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <p className="py-4 text-lg">
        <span className="text-primary font-semibold">{items.length}</span> items
        found in the cart
      </p>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-[3] space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <CartPageItem
                key={item._id.toString()}
                item={item}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">
              Your cart is empty
            </p>
          )}
        </div>

        {/* Order Summary */}
        <div className="flex-[1] bg-gray-50 p-5 rounded-lg shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>

          {/* Item summary */}
          <div className="space-y-3 text-sm">
            {items.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium line-clamp-1">{item.title}</p>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium">৳{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr className="my-4" />

          {/* Totals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>{totalItem}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Price</span>
              <span className="text-primary">৳{totalPrice}</span>
            </div>
          </div>

          {/* Confirm Order Button */}
          <Link href={'/checkout'}>
          
            <button
              disabled={items.length === 0}
              className={`w-full mt-5 py-2  rounded-md text-white transition
              ${
                items.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary cursor-pointer hover:bg-primary/90"
              }
              `}
            >
              Confirm Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
