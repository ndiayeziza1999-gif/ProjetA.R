import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem("connexion-info", JSON.stringify({email, password}));
        toast.success("connexion reussie");
    }

    
  return (
    <div className="space-y-10">
      <div className=" flex gap-2 items-center justify-center ">
        <p className="lg:text-sm text-xl">If you already have an account</p>

        <Link className="border-2 rounded-lg lg:text-sm px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition" to="/Auth/Register">
          Log in
        </Link>
      </div>
      <h1 className="text-5xl text-black font-bold">Welcome to Shop 🛒</h1>
      <p className="text-gray-400">Login to your account to continue shopping</p>
       
          <div className="flex gap-4 mb-6">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg w-full justify-center bg-white hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5 cursor-pointer"
              />
              Se connecter avec Google
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded-lg w-full justify-center bg-white hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/394174/github.svg"
                alt="Githup"
                className="w-5 h-5 cursor-pointer"
              />
              Se connecter avec Githup
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"            
              className="w-full px-4 py-3 rounded-lg border bg-gray-100 focus:outline-none"
            />

            <input
              type={ showPassword ? "text" :"password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full px-4 py-3 rounded-lg border bg-gray-100 focus:outline-none"             
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <BsEye size={20} /> : <FiEyeOff size={20} />}
          </button>

            <button
              type="submit"
              className="border-2 w-1/4 bg-black text-white py-3  rounded-lg cursor-pointer hover:bg-white hover:text-black transition"
            >
              Login
            </button>
          </form>
     
    </div>
  );
}
