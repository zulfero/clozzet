function SingleProduct() {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center pt-[5em]">
        <div className="flex-1">
          <img src="src/assets/shop-images/unisex.png" alt="" width={600} />
        </div>
        <div className="flex-1">
          <h3>
            <span className="text-emerald-300">SHOES</span>
          </h3>
          <h1 className="font-bold text-4xl pt-5">Unisex Airforce Sneakers</h1>
          <div>
            <div className="w-[70px] h-[3px] flex justify-center items-center mt-5 mb-9 bg-slate-500"></div>
            <div className="font-bold text-xl mb-10">
              <p>KSH 3,500</p>
            </div>
            <div className="text-[1.2em]">
              <p className="flex flex-wrap w-[59%] ">
                {" "}
                The Sneaker has all sizes which fits to normal size, it is
                suitable for all weather conditions, it is light in weight
                making it comfortable for a longer wear. The shoe can be worn by
                both gender. It is suitable for outdoor activities. Buy from our
                shop, get it delivered to your doorstep and slay the whole day.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-[7em] items-center pr-[20em]">
            <div className="flex mt-7 flex-col ">
              <h1 className="mb-5">SELECT SIZE</h1>
              <div className="flex">
                <p className="py-1 px-5 border">40</p>
                <img className="py-1 px-5 border" src="" alt="" />
              </div>
            </div>
            <div className="mt-7">
              <h1 className="flex justify-center mb-5">QUANTITY</h1>
              <div className="flex text-xl">
                <p className="py-1 px-4 border">-</p>
                <p className="py-1 px-4 border">1</p>
                <p className="py-1 px-4 border">+</p>
              </div>
            </div>
            <div>
              <button></button>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
