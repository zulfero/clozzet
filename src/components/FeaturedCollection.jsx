import { AiOutlineHeart } from "react-icons/ai";

function FeaturedCollection({ name, image, price, cart, setCart }) {
  return (
    <div className="">
      <div></div>
      <div className=" flex-1 flex flex-col my-[5rem] items-center ">
        <div className="h-[400px] bg-[#f0efef] flex justify-center items-center group relative">
          <img src={image} alt="" className="w-full h-full object-cover" />
          <button
            className="rounded-xl text-[1rem] font-bold
        py-3 w-full bg-emerald-300 group-hover:block hidden absolute bottom-0"
          >
            ADD TO CART
          </button>
        </div>
        <div className="flex justify-between my-5 text-[1.5em] w-[90%]">
          <div>
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
}
export default FeaturedCollection;
