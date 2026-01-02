// import Image from "next/image";
import { getSingleProduct } from "@/actions/server/product";

import {
  FaStar,
  FaShoppingCart,
  FaCheckCircle,
  FaQuestionCircle,
} from "react-icons/fa";

const ProductDetails = async({ params }) => {
     const {id}=await params;
     const product=(await getSingleProduct(id))
  const discountedPrice =
    product?.price - (product?.price * (product?.discount || 0)) / 100;

  return (
    <div className="bg-base-100 min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Product Image */}
        <div className="relative h-[350px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-base-200 bg-gray-50">
          {/* <Image
            src={product?.image || "https://via.placeholder.com/500"}
            alt={product?.title}
            fill
            className="object-contain p-4"
          /> */}
          <img src={product.image} alt="product image" alt="" />
          {product?.discount > 0 && (
            <div className="absolute top-4 left-4 badge badge-secondary p-4 font-bold">
              {product.discount}% OFF
            </div>
          )}
        </div>

        {/* Right Side: Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold leading-tight">
              {product?.bangla}
            </h1>
            <p className="text-xl text-gray-500 mt-2 font-medium">
              {product?.title}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-orange-400 gap-1">
              <FaStar />
              <span className="font-bold text-base-content text-lg">
                {product?.ratings}
              </span>
            </div>
            <span className="text-gray-400">({product?.reviews} Reviews)</span>
            <span className="badge badge-outline badge-success font-semibold">
              {product?.sold} Sold Already
            </span>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-extrabold text-primary">
              ৳{discountedPrice}
            </span>
            {product?.discount > 0 && (
              <span className="text-xl line-through text-gray-400">
                ৳{product?.price}
              </span>
            )}
          </div>

          {/* Highlights from 'info' array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-y border-base-200">
            {product?.info?.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="text-success shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="btn btn-primary btn-lg w-full md:w-auto text-white gap-2 px-10">
            <FaShoppingCart /> Add to Shopping Cart
          </button>
        </div>
      </div>

      {/* Description & Q&A Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold border-b-2 border-primary w-fit pb-1">
            বিস্তারিত বিবরণ
          </h3>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {product?.description}
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-2xl h-fit space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FaQuestionCircle className="text-primary" /> প্রশ্ন ও উত্তর
          </h3>
          <div className="space-y-4">
            {product?.qna?.map((item, index) => (
              <div key={index} className="space-y-1">
                <p className="font-bold text-sm">Q: {item.question}</p>
                <p className="text-sm text-gray-600 italic">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
