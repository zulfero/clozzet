import { useEffect, useState } from "react";

function Cartproduct({ image, price, name, size, setCart, cart }) {
  const [cartCopy, setcartCopy] = useState([]);
  useEffect(() => {
    cart && setcartCopy([...cart]);
  }, []);
  function hanleCartActions(action, product) {
    if (action === "increment") {
      setcartCopy((prev) => [...prev, product]);
    }else if(action==="decerement"){

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
          <p className="py-1 px-4 border">{}</p>
          <p className="py-1 px-4 border">
            {cartCopy.filter((item) => item.name===name).length}
          </p>
          <p
            onClick={() =>
              hanleCartActions("increment", { image, price, name })
            }
            className="py-1 px-4 cursor-pointer border"
          >
            +
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
export default Cartproduct;
