'use client'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const SocialButton = () => {
    const params=useSearchParams()
    
    const handleGoogleLogin = async () => {
      const result = await signIn("google", { redirect: false,callbackUrl:params.get('callbackUrl')||'/' });
      if (result.ok) {
        Swal.fire("success", "login successful", "success");
      } else {
        Swal.fire("error", "something went wrong", "error");
      }
    };
    return (
      <div>
        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
        >
          <FcGoogle className="h-5 w-5" />
          Sign in with Google
        </button>
      </div>
    );
};

export default SocialButton;