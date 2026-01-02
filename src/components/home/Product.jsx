import React from 'react';

import ProductCard from '../cards/ProductCard';
import { getProduct } from '@/actions/server/product';

const Product = async() => {
     const products=(await getProduct())|| []
    return (
      <>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold  text-center mb-10 ">
            Our Products
          </h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {products.map(product=><ProductCard key={product.title} product={product}></ProductCard>)}
        </div>
      </>
    );
};

export default Product;