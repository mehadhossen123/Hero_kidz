
import React from 'react';
import CartPageItem from './CartPageItem';
import { getCart } from '@/actions/server/cart';
import CartComponent from '@/components/home/CartComponent';

const CartPage =async () => {
    const cartItem=await  getCart()
    const formatedItems=cartItem.map((item)=>({...item,_id:item._id.toString()}))
    
    return (
      <div className="mt-20">
        {/* title  */}
        <div className="">
          <h1 className="text-bold md:py-5 my-2.5 ml-5  font-black md:text-5xl text-2xl md:border-l-10 pl-8  border-l-5 border-primary ">
            My Cart{" "}
          </h1>
         <CartComponent cartItems={formatedItems}></CartComponent>
        </div>
       
      </div>
    );
};

export default CartPage;