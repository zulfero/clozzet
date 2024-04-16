import { FiSearch } from "react-icons/fi";

function Hero() {
  return (
    <div className="container mx-auto flex">
      <div className="w-[40em] my-10">
        <h1 className="text-5xl">
          Choose the look that <span className="text-emerald-300">suits</span>{" "}
          you best
        </h1>
        <p className="text-2xl my-10">
          Every day is a fashion show & the world is your runway. clozzet will
          elevate your wardrobe with the best collections.Be exclusive,Be
          Devine,Be yourself. Explore outfits that will make you comfortably
          beautiful. True style never dies.
        </p>
        <div className="flex gap-5">
          <button className="border rounded-full py-4 px-[4em] bg-emerald-400">
            Shop Now
          </button>
          <button className="border rounded-full py-4 px-[4em] text-emerald-400 shadow-xl">
            About Us
          </button>
        </div>
        <div className="flex  flex-1 items-center border rounded-full my-10 right-7 px-8 gap-3">
          <FiSearch size={30} />
          <input
            className="text-[1.2rem] shadow-lg py-5" 
            type="text"
            placeholder="search"
          />
        </div>
      </div>
      <div className="flex absolute right-0 top-0">
        <img
          className="absolute top-[7em] right-[6em] w-[40] "
          src="src/assets/images/hero-image.png"
          alt=""
        />
        <img
          className="z-[-1] w-[37em]"
          src="src/assets/images/hero-background.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Hero;
