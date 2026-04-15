import { Link } from "react-router-dom";
import { Womenproduits } from "../../data/type";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function WOMENPage() {
  return (
    <>
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
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
  {Womenproduits.map((product) => (
    <div
      key={product.id}
      className="group flex flex-col">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 relative cursor-pointer">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </Link>
      <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400 mb-1">
        {product.category}
      </span>
      <Link to={`/product/${product.id}`}>
        <h3 className="font-bold text-sm md:text-[15px] mb-1 text-gray-900 hover:text-gray-600 transition-colors uppercase">
          {product.name}
        </h3>
      </Link>
      <p className="text-gray-500 text-sm mb-4 font-medium italic">
        {product.price}
      </p>
      <div className="flex gap-1.5 mb-3">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className={`w-3 h-3 md:w-3.5 md:h-3.5 ${color} border border-gray-200 rounded-none shadow-sm cursor-pointer hover:ring-1 ring-gray-400`}/>
        ))}
      </div>
      <div className="flex flex-wrap gap-1">
        {product.sizes.map((size) => (
          <span
            key={size}
            className="text-[8px] md:text-[9px] font-bold border border-gray-200 px-1.5 py-0.5 text-gray-400 hover:border-black hover:text-black transition-colors uppercase">
            {size}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
      </section>

      <footer className="w-full">
        <div className="bg-pink-100 py-20 px-4 flex flex-col items-center text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Subscribe To Get Offers In Your Inbox
          </h3>
          <p className="text-gray-500 text-sm mb-8 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            maiores! Odio excepturi non, ea recusandae inventore distinctio in
            aut dolorum alias possimus, ullam corrupti ex voluptatibus
            consequatur culpa, labore reiciendis.
          </p>
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center">
            <input
              type="email"
              placeholder="Your Email Address *"
              className="flex-grow p-3 bg-transparent border border-gray-300 outline-none focus:border-black transition-colors"
              required/>
            <button className="bg-black text-white px-10 py-3 cursor-pointer font-semibold hover:bg-gray-800 transition-colors rounded-sm">
              Subscribe
            </button>
          </form>
          <ul className="flex flex-wrap justify-center gap-6 mt-16 text-sm text-gray-600 font-medium">
            <Link to="/BUYT-SHIRTS" className="hover:text-black">
              Buy T-Shirts
            </Link>
            <Link to="/women" className="hover:text-black">
              Women
            </Link>
            <Link to="/men" className="hover:text-black">
              Men
            </Link>
            <Link to="/about" className="hover:text-black">
              About
            </Link>
            <Link to="/contact" className="hover:text-black">
              Contact
            </Link>
          </ul>
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="bg-white p-3 shadow-sm hover:text-blue-600 transition-colors">
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="bg-white p-3 shadow-sm hover:text-blue-400 transition-colors">
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              className="bg-white p-3 shadow-sm hover:text-pink-600 transition-colors">
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
        <div className="bg-black py-10 text-center">
          <p className="text-white text-[13px] tracking-wide">
            Copyright © 2026 T-Shirts Store | Powered by T-Shirts Store
          </p>
        </div>
      </footer>
    </>
  );
}
