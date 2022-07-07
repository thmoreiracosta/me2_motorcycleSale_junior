import { Route, Routes } from "react-router-dom";
import Subscribe from "./pages/Index/Index"
import Home from "./pages/Home/Home"
import Checkout from "./pages/Checkout/Checkout"
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/index.html" element={<Subscribe />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
      <Route path="/home/checkout" element={<Checkout />} />
    </Routes>
  )
}