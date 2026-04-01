import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NAme, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    if (password.length < 10) {
      toast.error("Le mot de passe doit comporter au moins 10 carracteres");
      return;
    }

    localStorage.setItem(
      "Inscription-info",
      JSON.stringify({ NAme, email, password }),
    );
    toast.success("Inscription reussie");
  };

  return (
    <div className="space-y-10 ">
      <div className="flex gap-2  items-center justify-center">
        <p className="lg:text-sm text-xs">
          If you don't have an Account? 
        </p>

        <Link
          className="border-2 rounded-lg lg:text-sm px-4 py-2 bg-black text-white hover:bg-white hover:text-black transition"
          to="/Auth/Login"
        >
          Sign up
        </Link>
      </div>
      <h1 className="text-5xl text-black font-bold">Welcome to Shop 🛒</h1>
      <p className="text-gray-400">Signup to get started with Shop</p>
      <div className="flex items-center gap-5">
        <div>
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="Nom Complet"
              placeholder="Prenom et  Nom"
              value={NAme}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border bg-gray-100 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border bg-gray-100 focus:outline-none"
            />

            <div className="relative  rounded-lg border bg-gray-100 ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="border-none  w-full px-4 py-3 focus:outline-none"
              />
              {showPassword ? (
                <div
                  className="absolute right-2 top-1/2  cursor-pointer translate-y-1/2 text-gray-600"
                  onClick={() => setShowPassword(false)}
                >
                  <BsEye />
                </div>
              ) : (
                <div
                  onClick={() => setShowPassword(true)}
                  className="absolute right-2 top-0  cursor-pointer translate-y-1/2 text-gray-600"
                >
                  <FiEyeOff />
                </div>
              )}
            </div>           
            <button
              type="submit"
              className=" border-2 w-1/3 bg-black text-white py-3 rounded-lg cursor-pointer hover:bg-white hover:text-black transition"
            >
              Create an account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
