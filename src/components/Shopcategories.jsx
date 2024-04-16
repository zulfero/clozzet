import Shopcategory from "./Shopcategory";

function Shopcategories({ cart, setCart }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/ragged-jeans.png"
          name="Blue Raggeed Jeans"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/images/sweatshirts.png"
          name="Brown Leather Jacket"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/slim-banquet-dress.png"
          name="Slim Banquet Dress"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/images/denim.png"
          name="Blue Denim jacket"
          price="Ksh 2,250"
        />
      </div>
      <div className="flex">
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/images/leather-jacket.png"
          name="Brown Leather Jacket"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/quartz-watch.png"
          name="Quartz Men's Watch"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/denim-jeans.png"
          name="Women Denim Jeans"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/brown-handbag.png"
          name="Brown Handbag"
          price="Ksh 2,250"
        />
      </div>
      <div className="flex">
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/graphic-tshirts.png"
          name="Unisex Graphic T-shirt"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/bomber.png"
          name="Black Bomber Jacket"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/images/pallazo.png"
          name="Pleated pallazo Pants"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/leather-shoes.png"
          name=" Pure Leather Shoes "
          price="Ksh 2,250"
        />
      </div>
      <div className="flex">
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/serpenti-forever.png"
          name="Purple Serpenti Purse"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/unisex.png"
          name="Unisex Airforce Sneakers"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/cocktail.png"
          name="Blue Cocktail Dress"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/Off-The-Shoulder.png"
          name="Off-Shoulder Crop Top"
          price="Ksh 2,250"
        />
      </div>
      <div className="flex">
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/Airsense-pleated.png"
          name="Airsense Pleated Pants"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/smartwatch.png"
          name="Classy Smart Watch"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/ZOOSHI-COBALT.png"
          name="Blue Cocktail Dress"
          price="Ksh 2,250"
        />
        <Shopcategory
          cart={cart}
          setCart={setCart}
          image="src/assets/shop-images/knitted-sweater.png"
          name="Off-Shoulder Crop Top"
          price="Ksh 2,250"
        />
      </div>
    </div>
  );
}
export default Shopcategories;
