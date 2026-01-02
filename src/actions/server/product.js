
'use server'
import { collections, connect } from "@/lib/dbconnect"
import { ObjectId } from "mongodb";

export const  getProduct= async()=>{
 const products=await connect(collections.PRODUCTS).find().toArray()
 return products;
}
export const  getSingleProduct=async(id)=>{
    if( !id ||id.length!==24){
        return null
    }
    const query={_id:new ObjectId(id)}
    const singleProduct=await connect(collections.PRODUCTS).findOne(query)
    return singleProduct;

}