import Shopitem from "../components/Shopitem";
import Shopcategories from "../components/Shopcategories";
import Shopselector from "../components/Shopselector";

function Shop({ cart, setCart }) {
  return (
    <>
      <Shopitem />
      <Shopcategories cart={cart} setCart={setCart} />
      <Shopselector />
    </>
  );
}
export default Shop;
