import { getCart } from '@/actions/server/cart';
import CheckOut from '@/components/CheckOut';
import React from 'react';

const CheckOupPage =async () => {
     const cartItem=await  getCart()
        const formatedItems=cartItem.map((item)=>({...item,_id:item._id.toString()}))
    return (
      <div className="mt-20">
        <div>
          <h1 className="text-bold md:py-5 my-2.5 ml-5  font-black md:text-5xl text-2xl md:border-l-10 pl-8  border-l-5 border-primary ">
            Checkout Page
          </h1>
          <p className='ml-5 font-bold text-xl md:text-2xl'>Delivery Information </p>
        </div>

        <CheckOut cartItem={formatedItems}></CheckOut>
      </div>
    );
};

export default CheckOupPage;