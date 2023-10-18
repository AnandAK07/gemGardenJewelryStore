import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/products"
        element={
          <PrivateRoutes>
            {" "}
            <Products />
          </PrivateRoutes>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;