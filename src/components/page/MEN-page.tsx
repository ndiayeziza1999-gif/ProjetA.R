import { Link } from "react-router-dom";
import { Menproduits } from "../../data/type";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

export default function MENPage() {
  return (
    <>
      <section className="bg-white py-16 px-6 md:px-20">
        <div className=" mb-12">
          <span className="text-gray-400 text-xs font-medium italic ">
            <Link to="/">Home</Link> / Men
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
            Popular T-Shirts Men
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {Menproduits.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 relative cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"/>
                </div>
              </Link>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-gray-400 mb-1">
                {product.category}
              </span>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-bold text-sm md:text-[15px] mb-1 text-gray-900 hover:text-gray-600 transition-colors uppercase">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-500 text-[13px] md:text-sm mb-4 font-medium italic">
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
        <div className="bg-pink-100 py-12 px-6 sm:py-20 flex flex-col items-center text-center">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 max-w-md">
            Subscribe To Get Offers In Your Inbox
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mb-8 max-w-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            maiores! Odio excepturi non.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg justify-center">
            <input
              type="email"
              placeholder="Your Email Address *"
              className="w-full sm:flex-grow p-3 bg-white/50 sm:bg-transparent border border-gray-300 outline-none focus:border-black transition-colors text-sm"
              required
            />
            <button className="w-full sm:w-auto bg-black text-white px-8 py-3 cursor-pointer font-semibold hover:bg-gray-800 transition-colors rounded-sm text-sm">
              Subscribe
            </button>
          </form>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-12 sm:mt-16 text-[12px] sm:text-sm text-gray-600 font-medium uppercase tracking-wider">
            <li>
              <Link to="/BUYT-SHIRTS" className="hover:text-black">
                Buy T-Shirts
              </Link>
            </li>
            <li>
              <Link to="/women" className="hover:text-black">
                Women
              </Link>
            </li>
            <li>
              <Link to="/men" className="hover:text-black">
                Men
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-3 mt-8">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white p-3 shadow-sm hover:scale-110 transition-transform"
              >
                <Icon size={14} className="hover:text-pink-600" />
              </a>
            ))}
          </div>
        </div>
        <div className="bg-black py-6 sm:py-10 text-center px-4">
          <p className="text-white text-[11px] sm:text-[13px] tracking-wide opacity-80">
            Copyright © 2026 T-Shirts Store | Powered by T-Shirts Store
          </p>
        </div>
      </footer>
    </>
  );
}
