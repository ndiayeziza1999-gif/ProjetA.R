import { Link } from 'react-router-dom'
import { Womenproduits } from '../../data/type'

export default function WOMENPage() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className=" mb-12">
          <span className="text-gray-400 text-xs font-medium italic ">
            <Link to="/">Home</Link> / Women
          </span>
          <h2 className="text-2xl font-bold mt-2 text-gray-900">SHOP</h2>
          <p className="font-medium text-xs mt-8 text-gray-400">
            Showing all 5 results
          </p>
        </div>
                <div className="text-center mb-12">
                  <span className="text-gray-400 text-xs font-medium italic tracking-wide">
                    Summer Collection
                  </span>
                  <h2 className="text-3xl font-bold mt-2 text-gray-900">
                    Popular T-Shirts Women
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {Womenproduits.map((product) => (
                    <div
                      key={product.id}
                      className="group cursor-pointer flex flex-col"
                    >
                      <div className="aspect-4/5 overflow-hidden bg-gray-100 mb-4 relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                      </div>
                      <span className="text-10px uppercase tracking-[0.15em] text-gray-400 mb-1">
                        {product.category}
                      </span>
                      <h3 className="font-bold text-[15px] mb-1 text-gray-900">
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
                            className="text-[9px] font-bold border border-gray-200 px-1.5 py-0.5 text-gray-400 hover:border-black hover:text-black transition-colors"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
  )
}
