import React, { useState } from "react";
import { products } from "../../data/type";
import { Link } from "react-router-dom";

export default function BUYTSHIRTSPage() {
  const [visibleCount, setVisibleCount] = useState(4);
  const displayedProducts = products.slice(0, visibleCount);
  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <section className="bg-white py-16 px-6 md:px-20 ">
        <div className=" mb-12">
          <span className="text-gray-400 text-xs font-medium italic ">
            <Link to="/">Home</Link> / Shop
          </span>
          <h2 className="text-2xl font-bold mt-2 text-gray-900 uppercase">
            SHOP
          </h2>
          <p className="font-medium text-xs mt-8 text-gray-400">
            Showing 1–{displayedProducts.length} of {products.length} results
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 "/>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-gray-400 mb-1">
                {product.category}
              </span>
              <h3 className="font-bold text-base mb-1 text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 font-medium">
                {product.price}
              </p>
              <div className="flex gap-1.5 mb-3">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-3.5 h-3.5 ${color} border border-gray-200 rounded-none shadow-sm cursor-pointer hover:ring-1 ring-gray-400`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="text-xs font-bold border border-gray-200 px-1.5 py-0.5 text-gray-400 hover:border-black hover:text-black transition-colors">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          {visibleCount < products.length ? (
            <button
              onClick={loadMore}
              className="bg-black hover:text-white text-white hover:bg-gray-900 text-sm font-bold cursor-pointer border px-3 py-2 rounded-sm border-gray-300 transition-all  tracking-widest">
              No more products to show
            </button>
          ) : (
            <button className="bg-black hover:text-white text-white hover:bg-gray-900 text-sm font-bold cursor-pointer border px-3 py-2 rounded-sm border-gray-300 ">
              No more products to show
            </button>
          )}
        </div>

      </section>
    </>
  );
}
