import AddToCart from "../components/AddToCart";

function Cart({ cart, setCart, cartCopy, setcartCopy }) {
  return (
    <>
      <AddToCart
        cart={cart}
        setCart={setCart}
        cartCopy={cartCopy}
        setcartCopy={setcartCopy}
      />
    </>
  );
}
export default Cart;
