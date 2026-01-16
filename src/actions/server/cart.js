'use server'

import { ObjectId } from "mongodb";

import { cache } from "react";

const { authOptions } = require("@/lib/authOptions");
const { connect, collections } = require("@/lib/dbconnect");
const { getServerSession } = require("next-auth");

const cartCollection=connect(collections.CART);


export const handleCart=async({product,inc=true})=>{
    const user=await getServerSession(authOptions)|| {}
    //get the cartItem
    const query={email:user?.email,productId: product._id}
    const isAdded=await cartCollection.findOne(query);
    if(isAdded){
      //check if cart is exist and update data 
      const updatedData={
        $inc:{
            quantity:inc? 1:-1

        }

        }
        const setUpdatedData=await cartCollection.updateOne(query,updatedData);
        return {success:Boolean(setUpdatedData.modifiedCount)}
      }
        else{
      // if not exist inset the cart
      const newData={
        productId:product?._id,
        email:user?.email,
        title:product?.title,
        image:product?.image,
        price: product?.price - (product?.price * (product?.discount || 0)) / 100,
        quantity:1,
        userName:user?.name
        
      }
      const insertProduct=await cartCollection.insertOne(newData)
      return {success:insertProduct.acknowledged}
    }
    
  

   

 
    
  
}

 
export  const getCart = cache(async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return [];
  }
  const query = { email: user?.email };
  const cart = await cartCollection.find(query).toArray();
  return cart;
});

export  const deleteItemFromCart=async(id)=>{
    const { user } = (await getServerSession(authOptions)) || {};
    if (!user) {
      return [];
    }
    if(!id.length==24){
        return {success:false}
    }
    const query = { _id: new ObjectId(id), email: user?.email };
    const result=await cartCollection.deleteOne(query)
   
     return { success: Boolean(result.deletedCount) };
    
}
export const quantityIncreaseDb=async(id,quantity)=>{
     const { user } = (await getServerSession(authOptions)) || {};
     if (!user) {
       return [];
     }
     if (quantity>10) {
       return { success: false,message:"you can't buy 10 more product at a time " };
     }
      const query = { _id: new ObjectId(id), email: user?.email };
      const updatedQuantity = {
        $inc: {
          quantity: 1
        },
      };
     
     const result = await cartCollection.updateOne(query,updatedQuantity);

     return { success: Boolean(result.modifiedCount) };

}
export const quantityDecreaseDb=async(id,quantity)=>{
     const { user } = (await getServerSession(authOptions)) || {};
     if (!user) {
       return [];
     }
     if (quantity<=1) {
       return { success: false,message:"Quantity can't be empty " };
     }
     const query = { _id: new ObjectId(id) ,email:user?.email};
      const updatedQuantity = {
        $inc: {
          quantity:- 1
        },
      };
     
     const result = await cartCollection.updateOne(query,updatedQuantity);

     return { success: Boolean(result.modifiedCount) };

}

 
export const clearCart = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) {
    return [];
  }
  const query = { email: user?.email };
  const cart = await cartCollection.deleteMany(query);
  return cart;
};