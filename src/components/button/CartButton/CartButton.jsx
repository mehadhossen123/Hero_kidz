'use client'
import { handleCart } from '@/actions/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButton = ({product}) => {
    const session=useSession()
    // console.log(session.status)
    const [isLoading,setIsLoading]=useState(false)

    
    const path=usePathname();
    const router=useRouter()
     const isAuthenticated=session?.status=='authenticated'
    const add2Cart=async()=>{
        setIsLoading(true)
        if(isAuthenticated){
           const result= await handleCart({product,inc:true})
           if(result.success){
            Swal.fire('Add to cart ',product?.title,'success')
           }
           else{
           
            Swal.fire('error','Something went wrong ','error')
           }
            setIsLoading(false);
        }
        else{
            router.push(`/login?callbackUrl=${path}`)
            setIsLoading(false)
        }

    }
    return (
        <div>
             <button disabled={session?.status=='loading'||isLoading} onClick={add2Cart} className="btn btn-primary btn-sm flex flex-1 md:w-auto text-white gap-2 px-5">
                        <FaShoppingCart /> Add to Cart
                      </button>
            
        </div>
    );
};

export default CartButton;