import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/layout/home-layout";
import AuthLayout from "./components/layout/Auth-Layout";
import RegisterPage from "./components/page/auth/Register-Page";
import LoginPage from "./components/page/auth/Login-Page";
import MENPage from "./components/page/MEN-page";
import TSHIRTSPage from "./components/page/T-SHIRTS-page";
import WOMENPage from "./components/page/WOMEN-page";
import BUYTSHIRTSPage from "./components/page/BUYT-SHIRTS-page";
import { Toaster } from "sonner";
import CONTACTPage from "./components/page/CONTACT-page";
import ABOUTPage from "./components/page/ABOUT-page";


export default function App() {
 
  return (
    <>
      <BrowserRouter>
      <Toaster position="bottom-center" richColors />
        <Routes>
          <Route path="/" element={<HomeLayout />}>       
            <Route index element={<TSHIRTSPage />} />
            <Route path="/BUYT-SHIRTS" element={<BUYTSHIRTSPage />} />
            <Route path="/women" element={<WOMENPage />} />
            <Route path="/men" element={<MENPage />} />
            <Route path="/about" element={<ABOUTPage />} />
            <Route path="/contact" element={<CONTACTPage />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
