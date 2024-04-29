import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "./Signup";
import Cart from "../pages/Cart";
import SingleProduct from "./SingleProduct";
import AddProducts from "./AddProducts";
import Aboutus from "../pages/Aboutus";
import { useState } from "react";
import { useEffect } from "react";
function Router({}) {
  const [cart, setCart] = useState([]);
  const [cartCopy, setcartCopy] = useState([]);

  useEffect(() => {
    // Add items to local storage
    cart &&
      cart.length !== 0 &&
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    const cartItems =
      cart.length !== 0 && JSON.parse(localStorage.getItem("cart"));
    cartItems && setCart(cartItems);
  }, []);

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
          path="/cart"
          element={
            <Layout cart={cart} setCart={setCart}>
              <Cart
                cart={cart}
                setCart={setCart}
                cartCopy={cartCopy}
                setcartCopy={setcartCopy}
              />
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
        <Route
          path="aboutus"
          element={
            <Layout>
              <Aboutus />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
