'use client'
import { usePathname, useRouter } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({product}) => {

    const isLogin=false;
    const path=usePathname();
    const router=useRouter()
    const add2Cart=()=>{
        if(isLogin){
            alert(product._id)
        }
        else{
            router.push(`/login?callbackUrl=${path}`)
        }

    }
    return (
        <div>
             <button onClick={add2Cart} className="btn btn-primary btn-lg w-full md:w-auto text-white gap-2 px-10">
                        <FaShoppingCart /> Add to Shopping Cart
                      </button>
            
        </div>
    );
};

export default CartButton;