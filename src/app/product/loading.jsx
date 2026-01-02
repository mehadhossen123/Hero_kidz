import ProductSkeleton from '@/skeleton/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {
                [...Array(8)].map((_,key)=><ProductSkeleton key={key}></ProductSkeleton>)
            }
            
        </div>
    );
};

export default loading;