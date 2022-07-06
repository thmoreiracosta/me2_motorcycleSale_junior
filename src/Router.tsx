import { Route, Routes } from "react-router-dom";
import Subscribe from "./pages/Subscribe/Subscribe"
import Home from "./pages/Home/Home"
import Checkout from "./pages/Checkout/Checkout"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/checkout" element={<Checkout />} />
    </Routes>
  )
}