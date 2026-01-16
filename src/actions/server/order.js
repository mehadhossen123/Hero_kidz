'use server'

import { getServerSession } from "next-auth";
import { clearCart, getCart } from "./cart";

const { authOptions } = require("@/lib/authOptions");
const { connect, collections } = require("@/lib/dbconnect")
  
const orderCollection =connect(collections.ORDER);


export  const createOrder=async(payload)=>{
    const user = (await getServerSession(authOptions)) || {};
    if(!user){
        return {success:false}
    }
    const cart=await  getCart();
    if(cart.length===0){
        return{success:false}
    }
    const newOrder={
        createdAt:new Date().toISOString(),
        cart:cart,
         ...payload

    }
    const result=await orderCollection.insertOne(newOrder);
    if(result.insertedId){
       const clear=await clearCart()
    }
    
  return{
    success:result.insertedId
  }
    

    
}