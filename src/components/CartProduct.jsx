import { useEffect, useState } from "react";
import { MdDragHandle } from "react-icons/md";

function Cartproduct({ image, price, name, size, setCart, cart, subtotals }) {
  const [cartCopy, setcartCopy] = useState([]);
  useEffect(() => {
    cart && setcartCopy([...cart]);
  }, []);
  function handleCartActions(action, product) {
    if (action === "increment") {
      setcartCopy((prev) => [...prev, product]);
    } else if (action === "decrement") {
      const cartCopyItems = [...cartCopy];
      const cartItemIndex = cartCopyItems.indexOf(product);
      cartCopyItems.splice(cartItemIndex, 1);
      setcartCopy(cartCopyItems);
    }
  }
  return (
    <>
      <div className="flex justify-around items-center py-5">
        <div className="flex justify-center flex-1 w-[80%] h-[80%]">
          <img className="" src={image} alt="" />
          <div className="font-black">
            <h3>{name}</h3>
            <h3 className="text-[#b0b0b0]">{size}</h3>
          </div>
        </div>

        <div className="flex justify-center text-xl flex-1">
          <button
            onClick={() =>
              handleCartActions("decrement", { image, price, name })
            }
            disabled={
              cartCopy.filter((item) => item.name === name).length === 1
            }
            className="py-1 px-4 border cursor-pointer disabled:bg-gray-300 disabled:text-white"
          >
            -
          </button>
          <p className="py-1 px-4 border content-none">
            {cartCopy.filter((item) => item.name === name).length}
          </p>
          <p
            onClick={() =>
              handleCartActions("increment", { image, price, name })
            }
            className="py-1 px-4 cursor-pointer border"
          >
            +
          </p>
        </div>
        {/* {console.log(
          cartCopy
            .filter((item) => item.name === name)
            .reduce(
              (acc, curr) =>
                acc + parseInt(curr.price.replace("Ksh ", "").replace(",", "")),
              0
            )
        )} */}
        <div className="flex-1 flex justify-center">
          <p>
            {" "}
            {`Ksh. ${cartCopy
              .filter((item) => item.name === name)
              .reduce(
                (acc, curr) =>
                  acc +
                  parseInt(curr.price.replace("Ksh ", "").replace(",", "")),
                0
              )
              .toLocaleString()}`}
          </p>
        </div>
      </div>
    </>
  );
}
export default Cartproduct;
