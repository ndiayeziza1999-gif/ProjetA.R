import { NavLink, Outlet, Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

const MenuList = [
  { link: "/BUYT-SHIRTS", name: "BUYT-SHIRTS" },
  { link: "/women", name: "WOMEN" },
  { link: "/men", name: "MEN" },
  { link: "/about", name: "ABOUT" },
  { link: "/contact", name: "CONTACT" },
];

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex items-center justify-between px-10 py-4 bg-white border-b border-gray-100 font-light text-[12px]">
        <div className="flex gap-6">
          {MenuList.map((menu) => (
            <NavLink
              key={menu.link}
              to={menu.link}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black "
              }
            >
              {menu.name}
            </NavLink>
          ))}
        </div>
        <Link to="/" className="flex flex-col items-center">
          <h1 className="text-3xl font-black tracking-tighter leading-none text-black border-b-2 border-gray-100 pb-1">
            T-SHIRTS
          </h1>
          <span className="text-[9px] tracking-[0.5em] text-gray-400 uppercase mt-1">
            store
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <button className="hover:text-black cursor-pointer transition-colors">
            <FaMagnifyingGlass />
          </button>
          <Link to="/Auth/LogIn" className=" text-black text-lg rounded-sm px-2 py-2 ">
            Login
          </Link>
         
        </div>
      </nav>

        <Outlet />
      
    </div>
  );
}
