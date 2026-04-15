import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUIT } from "../../data/produit";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function PageDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = PRODUIT.find((p) => String(p.id) === String(id));

  if (!product)
    return (
      <div className="p-20 text-center uppercase tracking-widest font-bold">
        Product not found
      </div>
    );

  return (
    <div className="bg-white min-h-screen py-6 md:py-12 px-4 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="relative group bg-gray-50 aspect-[4/5] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"/>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            <div className="aspect-square bg-gray-100 border  cursor-pointer overflow-hidden hover:border-gray-400 border-transparent transition-all">
              <img
                src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-d-400x488.jpg"
                className="w-full h-full object-cover opacity-60"
                alt="thumb"/>
            </div>
            <div className="aspect-square bg-gray-100 cursor-pointer overflow-hidden hover:border-gray-400 border border-transparent transition-all">
              <img
                src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-001-b-400x488.jpg"
                className="w-full h-full object-cover"
                alt=""/>
            </div>
            <div className="aspect-square bg-gray-100 cursor-pointer overflow-hidden hover:border-gray-400 border border-transparent transition-all">
              <img
                src="https://websitedemos.net/t-shirts-store-04/wp-content/uploads/sites/1115/2022/07/product-01-c-400x488.jpg"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4 lg:pt-0">
          <span className="text-gray-400 text-[10px] md:text-xs tracking-[0.2em] mb-2 uppercase">
            {product.category}
          </span>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xl md:text-xl font-medium text-gray-800">
              {product.price}
            </p>
            <span className="text-gray-400 text-xs">& Free Shipping</span>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 md:max-w-md">
            {product.description}
          </p>
          <div className="mb-6">
            <div className="flex gap-3">
              {product.colors?.map((color, i) => (
                <div
                  key={i}
                  className={`w-5 h-5  ${color}  cursor-pointer hover:scale-110 transition-transform`}/>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  className="border border-gray-200 text-[5px] font-bold hover:border-black ">
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 border-t border-gray-100 pt-8">
            <div className="flex items-center justify-between border border-gray-200 w-full sm:w-32 h-12">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="px-4 h-full text-gray-400 hover:text-black transition-colors">
                <FaMinus size={10} />
              </button>
              <span className="text-sm font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 h-full text-gray-400 hover:text-black transition-colors">
                <FaPlus size={10} />
              </button>
            </div>
            <button className="bg-black text-white flex-0.5 border-6 rounded-xl h-12  text-[11px] font-bold uppercase  hover:bg-gray-800 cursor-pointer  ">
              Add to cart
            </button>
          </div>
          <div className="border-t border-gray-100">
            {["Description", "Additional Information", "Reviews (0)"].map(
              (item) => (
                <div
                  key={item}
                  className="border-b border-gray-100 py-5 flex justify-between items-center cursor-pointer group hover:bg-gray-50 px-2 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {item}
                  </span>
                  <FaPlus
                    size={10}
                    className="text-gray-400 group-hover:rotate-90 transition-transform duration-300"/>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
