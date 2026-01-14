import Logo from '@/components/Logo';
import React from 'react';

const loading = () => {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center ">
        <h1 className="font-bold md:text-4xl text-2xl animate-pulse">Loading</h1>
        <div className='animate-ping'>
          <Logo></Logo>
        </div>
      </div>
    );
};

export default loading;