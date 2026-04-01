import { Outlet, useLocation } from "react-router";

export default function AuthLayout() {
  const location = useLocation();

  const isLoginPage = location.pathname === "/auth/login";

  return (
    <div className="flex h-screen overflow-hidden items-center justify-center">
      <div className="w-1/2 bg-gray-100 h-full p-10 ">
        <Outlet />
      </div>
      <div className="w-1/2">
        <img
          src={
            isLoginPage
              ? ""
              : "https://images.pexels.com/photos/18293808/pexels-photo-18293808.jpeg"
          }
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
    </div>
  );
}