'use client'
import CartPageItem from '@/app/cart/CartPageItem';
import React, { useMemo, useState } from 'react';

const CartComponent = ({cartItems=[]}) => {
    const [items,setItems]=useState(cartItems)
    const totalItem = useMemo(
      () => items.reduce((acm, item) => acm + item.quantity, 0),
      [items]
    );

 const removeItem=(id)=>{
    setItems(preItem=>preItem.filter(i=>i._id!==id))

 }
 const  updateQuantity=(id,q)=>{
    setItems(preItem=>preItem.map(item=>item._id==id?{...item,quantity:q}:item))

 }

    return (
      <div>
        <p className="py-4 md:py-6 ml-5">
          <span className="text-primary">{items.length}</span> items found in
          the cart
        </p>
        <div className="flex">
          <div className="flex-3">
            {items.map((item) => (
              <CartPageItem
                key={item._id.toString()}
                item={item}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              ></CartPageItem>
            ))}
          </div>
          <div className="flex-1">
            <p className='text-center'>{totalItem}</p>
          </div>
        </div>
      </div>
    );
};

export default CartComponent;