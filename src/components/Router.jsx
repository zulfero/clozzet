import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "./Signup";
import AddToCart from "./AddToCart";
import SingleProduct from "./SingleProduct";
import AddProducts from "./AddProducts";
import { useState } from "react";
function Router() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Home cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Shop cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="addtocart"
          element={
            <Layout cart={cart} setCart={setCart}>
              <AddToCart cart={cart} setCart={setCart} />
            </Layout>
          }
        />
        <Route
          path="singleproduct"
          element={
            <Layout>
              <SingleProduct />
            </Layout>
          }
        />
        <Route
          path="addproducts"
          element={
            <Layout>
              <AddProducts />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
