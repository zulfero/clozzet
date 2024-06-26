import { AiOutlineHeart } from "react-icons/ai";

function Shopcategory({ name, price, image, setCart, cart }) {
  const handleAddToCart = (e, product) => {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      setCart((prev) => [...prev, product]);
    } else if (e.target.textContent.toLowerCase() === "remove from cart") {
      const CartDuplicate = [...cart];
      const itemIndex = CartDuplicate.indexOf(product);
      CartDuplicate.splice(itemIndex, 1);
      setCart(CartDuplicate);
    }
  };

  return (
    <>
      <div className=" flex-1 gap-2em flex flex-col my-[5rem] items-center  sm:flex-wrap overflow-hidden">
        <div className="h-[400px] bg-[#f0efef] flex gap-4 justify-center items-center group relative">
          <img className="w-full h-full object-cover" src={image} alt="" />
          <button
            onClick={(e) => handleAddToCart(e, { name, image, price })}
            className="rounded-xl text-[1rem] font-bold
        py-3 w-full bg-emerald-300 group-hover:block hidden absolute bottom-0"
          >
            {cart && cart.filter((item) => item.name === name).length === 1
              ? "remove from cart"
              : "add to cart"}
          </button>
        </div>
        <div className="flex justify-between my-3 text-[1.5em] w-[90%]">
          <div>
            <p>{name}</p>
            <div className="text-emerald-300">
              <p>{price}</p>
            </div>
          </div>

          <AiOutlineHeart />
        </div>
      </div>
    </>
  );
}
export default Shopcategory;
