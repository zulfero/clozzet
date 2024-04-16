import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout({ children, cart, setCart }) {
  return (
    <div className="">
      <Nav cart={cart} setCart={setCart} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
