import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/index";
import Products from "../components/Products/index";
import DetailProduct from "../components/DetailProduct/index";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:productId" element={<DetailProduct />} />
    </Routes>
  );
}

export default Routers;
