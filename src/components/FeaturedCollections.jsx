import FeaturedCollection from "./FeaturedCollection";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function FeaturedCollections({cart,setCart}) {
  return (
    <div className="container mx-auto ">
      <h1 className="flex justify-center my-9 text-2xl  font-semibold">Featured Collection</h1>
      <div className="flex gap-4">
      <MdArrowBackIos />
        <FeaturedCollection
          name="Brown Leather Jacket" 
          price="Ksh 2,250"cart={cart} setCart={setCart}
          icon="<AiOutlineHeart />"
          image="src/assets/images/leather-jacket.png"
        />
        <FeaturedCollection
          name="Round-neck Sweatshirts"
          price="Ksh 2,000"cart={cart} setCart={setCart}
          icon="<AiOutlineHeart />"
          image="src/assets/images/sweatshirts.png"
        />
        <FeaturedCollection
          name="Pleated Pallazo Trousers "
          price="Ksh 1,800"cart={cart} setCart={setCart}
          icon="<AiOutlineHeart />"
          image="src/assets/images/pallazo.png"
        />
        <FeaturedCollection
          name="M-22 Denim jacket"
          price="Ksh 1,250"
          icon="<AiOutlineHeart />"
          image="src/assets/images/denim.png"
        />
         <MdArrowForwardIos />
      </div>
    </div>
  );
}
export default FeaturedCollections;
