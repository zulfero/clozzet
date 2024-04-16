function SingleProduct() {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center pt-[8em]">
        <div className="flex-1">
          <img src="src/assets/shop-images/unisex.png" alt="" />
        </div>
        <div className="flex-1">
          <h3><span className="text-emerald-300">SHOES</span></h3>
          <h1 className="font-bold text-4xl pt-5">Uniforce Airforce Sneakers</h1>
          <div>
            <p>KSH 3,500</p>
            <p className="flex flex-wrap w-[53%]">
              {" "}
              The Sneaker has all sizes which fits to normal size, it is
              suitable for all weather conditions, it is light in weight making
              it comfortable for a longer wear. The shoe can be worn by both
              gender. It is suitable for outdoor activities. Buy from our shop,
              get it delivered to your doorstep and slay the whole day.
            </p>
          </div>
          <div>
            <div>
              <h1>SELECT SIZE</h1>
              <p>40</p>
              <img src="" alt="arrow" />
            </div>
            <div>
              <h1>Quantity</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
