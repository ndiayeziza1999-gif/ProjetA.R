import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { products } from "../../data/type";
import { saleProducts } from "../../data/type";
import { Link } from "react-router-dom";

export default function TSHIRTSPage() {
  return (
    <>
      <div className="relative w-full min-h-120 h-screen bg-pink-100 flex items-center overflow-hidden px-10 md:px-20">
        
        <div className="z-10 max-w-xl px-24">
          <span className="text-gray-500 text-sm font-medium mb-4 block">
            Women
          </span>
          <h1 className="text-2xl md:text-5xl font-bold text-black leading-tight mb-8">
            Slick. Modern. Awesome.
          </h1>
          <button  className="bg-black text-white px-8 py-3 text-sm font-semibold hover:bg-gray-900 transition-colors">
           Shop Collection           
          </button>
        </div>
        <div className="absolute right-24  w-1/2 h-full flex items-end justify-center">
          <img
            src="https://images.pexels.com/photos/12194088/pexels-photo-12194088.jpeg"
            alt="laperaux"
            className=" w-full h-120  object-contain"
          />
        </div>
      </div>




      <section className="bg-white py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <span className="text-gray-400 text-xs font-medium italic tracking-wide">
            Summer Collection
          </span>
          <h2 className="text-3xl font-bold mt-2 text-gray-900">
            Popular T-Shirts
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
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




      <div className="bg-white">
        <section className="relative py-20 px-10 md:px-20 flex justify-center items-center">
          <div className=" mx-auto flex flex-col md:flex-row items-center  gap-12">
            <div className="w-full h-full md:w-1/2 flex justify-center bg-pink-100">
              <div className="relative w-72 h-96 md:w-80 md:h-450px shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/35999253/pexels-photo-35999253.jpeg"
                  alt="Spring Summer"
                  className="w-full h-full cursor-pointer object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 text-left">
              <span className="text-gray-400 text-[10px] uppercase tracking-widest">
                Women
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4 text-black">
                Spring Summer Collection
              </h2>
              <p className="text-gray-500 text-sm font-medium mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
                leo tempor, congue justo at, lobortis orci. Aliquam venenatis
                dui lectus, eu convallis turpis convallis et. Pellentesque.
              </p>
              <button className="bg-black text-white px-6 py-3 text-xs   hover:bg-gray-800 cursor-pointer">
                See Whole Collection
              </button>
            </div>
          </div>
        </section>





        <section className="py-20 px-10 md:px-20">
          <div className="text-center mb-12">
            <span className="text-gray-400 text-xs font-medium ">
              Summer Collection
            </span>
            <h2 className="text-3xl font-bold mt-2">On Sale T-Shirts</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {saleProducts.map((product) => (
              <div key={product.id} className=" cursor-pointer">
                <div className="relative  bg-gray-100 mb-4">
                  <span className="absolute top-3 left-3 bg-white text-10px font-bold px-2 py-1 rounded-full shadow-sm ">
                    {product.discount}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-10px uppercase tracking-widest text-gray-400 mb-1">
                  {product.category}
                </span>
                <h3 className="font-bold text-sm mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.price}</p>

                {/* Couleurs rapides */}
              </div>
            ))}
          </div>
        </section>



       <div className="bg-white py-20 px-6 md:px-20">
      
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h2 className="text-4xl font-medium mb-10">Reviews</h2>       
        <p className="text-lg md:text-xl font-semibold leading-snug mb-6 italic underline ">
          " Very good quality T-shirts and lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
          labore et dolore magna aliqua quis ipsum! "
        </p>

        <div className="flex justify-center gap-1 mb-2 text-orange-300">
          <p className="text-yellow-300 text-xl">⭐⭐⭐⭐⭐</p>
        </div>
        <p className="text-gray-400 text-xs tracking-widest font-medium uppercase">Jane Oliver</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

        <div className="relative group cursor-pointer overflow-hidden aspect-8/9">
          <img 
            src="https://images.pexels.com/photos/29138671/pexels-photo-29138671.jpeg" 
            alt="Men Collection" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-sm py-4 text-center shadow-lg">
            <h3 className="font-bold text-sm tracking-widest">MEN</h3>
            <p className="text-[10px] text-gray-500 uppercase mt-1">5 Products</p>
          </div>
        </div>
        <div className="relative group cursor-pointer overflow-hidden aspect-8/9">
          <img 
            src="https://images.pexels.com/photos/8089961/pexels-photo-8089961.jpeg" 
            alt="Women Collection" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] bg-white/90  py-4 text-center shadow-lg">
            <h3 className="font-bold text-sm tracking-widest">WOMEN</h3>
            <p className="text-[10px] text-gray-500 uppercase mt-1">5 Products</p>
          </div>
        </div>
      </div>

    </div>


    <footer className="w-full">
      <div className="bg-pink-100 py-20 px-4 flex flex-col items-center text-center">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Subscribe To Get Offers In Your Inbox
        </h3>
        <p className="text-gray-500 text-sm mb-8 max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maiores! Odio excepturi non, ea recusandae inventore distinctio in aut dolorum alias possimus, ullam corrupti ex voluptatibus consequatur culpa, labore reiciendis.
        </p>
        <form className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center">
          <input
            type="email"
            placeholder="Your Email Address *"
            className="flex-grow p-3 bg-transparent border border-gray-300 outline-none focus:border-black transition-colors"
            required
          />
          <button className="bg-black text-white px-10 py-3 cursor-pointer font-semibold hover:bg-gray-800 transition-colors rounded-sm">
            Subscribe
          </button>
        </form>
        <ul className="flex flex-wrap justify-center gap-6 mt-16 text-sm text-gray-600 font-medium">
          <Link to="/BUYT-SHIRTS" className="hover:text-black">Buy T-Shirts</Link>
          <Link to="/women" className="hover:text-black">Women</Link>
         <Link to="/men" className="hover:text-black">Men</Link>
          <Link to="/about" className="hover:text-black">About</Link>
          <Link to="/contact" className="hover:text-black">Contact</Link>
        </ul>
        <div className="flex gap-4 mt-8">
          <a href="#" className="bg-white p-3 shadow-sm hover:text-blue-600 transition-colors">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="bg-white p-3 shadow-sm hover:text-blue-400 transition-colors">
            <FaTwitter size={14} />
          </a>
          <a href="#" className="bg-white p-3 shadow-sm hover:text-pink-600 transition-colors">
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

      </div>

      
    </>
  );
}
