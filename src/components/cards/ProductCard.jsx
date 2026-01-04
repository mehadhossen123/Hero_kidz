

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
const ProductCard = ({ product }) => {
    const defaultImage =
      "https://i.ibb.co.com/p6Q0fchX/81a72-DDFc-KL-AC-SL1500.jpg";
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 group overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <Image
          src={
            product?.image && product.image !== ""
              ? product.image
              : defaultImage
          }
          alt={product?.title || "Hero Kidz Toy"}
          fill
          className="group-hover:scale-110 transition-transform duration-500 object-cover"
        />
        {product?.discount > 0 && (
          <div className="absolute top-2 left-2 badge badge-secondary font-bold">
            {product?.discount}% OFF
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="md:text-lg text-sm font-bold leading-tight line-clamp-2 h-12">
          {product?.bangla}
        </h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-orange-400">
            <FaStar />
            <span className="ml-1 font-semibold text-base-content">
              {product?.ratings}
            </span>
          </div>
          <span className="text-gray-400">({product?.reviews} reviews)</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-400">{product?.sold} sold</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-extrabold text-primary">
            ৳{product?.price - (product?.price * product?.discount) / 100}
          </span>
          {product?.discount > 0 && (
            <span className="text-sm line-through text-gray-400">
              ৳{product?.price}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="card-actions pt-2">
          <button className="btn btn-primary btn-sm flex-1 text-white gap-2">
            <FaShoppingCart /> Add to Cart
          </button>
          <Link href={`/product/${product._id}`}>
            <button className="btn btn-primary btn-sm flex-1 text-white gap-2">
              <CgDetailsMore /> View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
