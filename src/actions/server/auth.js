
'use server'
import { collections, connect } from "@/lib/dbconnect";
import bcrypt from "bcryptjs";

export const postUser =async (payload)=>{
    //check payload
   const  {email,password, name}=payload;
  

    if(!email ||!password){
        return null;
    }


    // check user
    const isExist=await  connect(collections.USERS).findOne({email})
    if(isExist){
        return null
    }


    // create user 
    const newUser={
        provider:"credentials",
        name,
        email,
        password:await bcrypt.hash(password,14),
        role:"user"
    }


    // insert user 
    const result=await connect(collections.USERS).insertOne(newUser)
    if(result.acknowledged){
        return{
            ...result,insertedId:result.insertedId.toString()
        }
    }
}
export const loginUser=async(payload)=>{
     const { email, password} = payload;
     if (!email || !password) {
       return null;
     }
      const isUserExist = await connect(collections.USERS).findOne({ email });
      if(!isUserExist){
        return null;
      }
      const isMatched=await bcrypt.compare(password,isUserExist.password)
      if(isMatched){
        return isUserExist;
      }else{
        return null;
      }
      

}