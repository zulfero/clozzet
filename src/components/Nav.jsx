import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Nav({ cart, setCart }) {
  return (
    <nav>
      <div className="container mx-auto flex justify-between">
        <ul className="left flex gap-10">
          <li>
            {" "}
            <Link to="/">
              <img src="src/assets/images/logo.svg" alt="clozzet's logo" />
            </Link>
          </li>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>About us</li>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
        <ul className="right flex gap-5 items-center justify-between">
          <li className="relative">
           <Link to="/addtocart"> <AiOutlineShoppingCart size={30} /></Link>
            <span className="position absolute right-[-8px] flex items-center justify-center top-[-10px]  bg-emerald-600 w-[17px] h-[17px] rounded-full">
              {cart ? cart.length:0}
            </span>
          </li>
          <li className="sm:hidden md:block">Sign up</li>
          <button className="border border-black py-4 px-[4em] rounded-full sm:hidden md:block">
            log-in
          </button>
          <li className="sm:hidden md:block">
            <FaBars />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
