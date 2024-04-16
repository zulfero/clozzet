function AddToCart() {
  return (
    <div className="container mx-auto  gap-4 flex">
      <div className=" flex-1 border">
        <div className="flex justify-around border border-b-[#b0b0b0] py-5">
          <h1 className="flex-1 flex justify-center">Product</h1>
          <h1 className="flex-1 flex justify-center">Quantity</h1>
          <h1 className="flex-1 flex justify-center">Price</h1>
        </div>

        <div className="flex justify-around items-center py-5">
          <div className="flex justify-center flex-1">
            <img
              className=""
              src="src/assets/shop-images/knitted-sweater.png"
              alt=""
              width={100}
            />
            <div className="font-black">
              <h3>Strip Knitted Sweater</h3>
              <h3 className="text-[#b0b0b0]">Size: XL</h3>
            </div>
          </div>

          <div className="flex justify-center text-xl flex-1">
            <p className="py-1 px-4 border">-</p>
            <p className="py-1 px-4 border">1</p>
            <p className="py-1 px-4 border">+</p>
          </div>
          <div className="flex-1 flex justify-center">
            <p>KSH 2250</p>
          </div>
        </div>
        <div className="flex justify-around items-center py-5">
          <div className="flex justify-center flex-1">
            <img
              className=""
              src="src/assets/shop-images/unisex.png"
              alt=""
              width={100}
            />
            <div className="font-black">
              <h3>Unisex Airforce Sneakers</h3>
              <h3 className="text-[#b0b0b0]">Size: XL</h3>
            </div>
          </div>

          <div className="flex justify-center text-xl flex-1">
            <p className="py-1 px-4 border">-</p>
            <p className="py-1 px-4 border">1</p>
            <p className="py-1 px-4 border">+</p>
          </div>
          <div className="flex-1 flex justify-center">
            <p>KSH 2250</p>
          </div>
        </div>
        <div className="flex justify-around items-center py-5">
          <div className="flex justify-center flex-1">
            <img
              className=""
              src="src/assets/shop-images/slim-banquet-dress.png"
              alt=""
              width={150}
            />
            <div className="font-black">
              <h3>Slim Banquet Dress</h3>
              <h3 className="text-[#b0b0b0]">Size: XL</h3>
            </div>
          </div>

          <div className="flex justify-center text-xl flex-1">
            <p className="py-1 px-4 border">-</p>
            <p className="py-1 px-4 border">1</p>
            <p className="py-1 px-4 border">+</p>
          </div>
          <div className="flex-1 flex justify-center">
            <p>KSH 2250</p>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-around items-center py-5">
      <div className="flex justify-center flex-1">
          <img src="src/assets/shop-images/unisex.png" alt="" width={100} />
          <div className="font-black">
            <h1>Strip Knitted Sweater</h1>
            <h2>Size: XL</h2>
            </div>
            <div className="flex justify-center text-xl flex-1">
              <p className="py-1 px-4 border">-</p>
              <p className="py-1 px-4 border">1</p>
              <p className="py-1 px-4 border">+</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <p>KSH 2250</p>
          </div>
        </div>

        <div className="flex justify-around items-center py-5">
        <div className="flex justify-center flex-1">
          <img
            className=""
            src="src/assets/shop-images/slim-banquet-dress.png"
            alt=""
            width={100}
          />
          </div>
          <div className="font-black">
          <h1>Strip Knitted Sweater</h1>
          <h2>Size: XL</h2>
          </div>

          <div className=" flex justify-center text-xl flex-1 ">
            <p className="py-1 px-4 border">-</p>
            <p className="py-1 px-4 border">1</p>
            <p className="py-1 px-4 border">+</p>
          </div>

          <div className="flex-1 flex justify-center">
            <p>KSH 2250</p>
          </div>
        </div>

        <div className="flex justify-around items-center py-5">
        <div className="flex justify-center flex-1">
          <img
            className=""
            src="src/assets/shop-images/ragged-jeans.png"
            alt=""
            width={100}
          />
          </div>
         <div className="font-black">
          <h1>Strip Knitted sweater</h1>
          <h2>Size: XL</h2>
          </div>

          <div className="flex justify-center text-xl flex-1">
            <p className="py-1 px-4 border">-</p>
            <p className="py-1 px-4 border">1</p>
            <p className="py-1 px-4 border">+</p>
          </div>
          <div className="flex-1 flex just-">
            <p>KSH 2250</p>
          </div>
        </div>
      </div> */}
      <div className="border w-[27%] h-[50vh] pl-6 pt-9 bg-[#eeeeee]">
        <h1 className="flex justify-center font-black text-2xl">
          Cart Summary
        </h1>
        <p className="m-5 flex justify-center text-[1.2em]">
          Have a promo code? Apply Here
        </p>
        <div className="flex gap-3">
          <input
            className="border p-4 "
            type="text"
            placeholder="Promo Code(optional)"
          />
          <div className="bg-emerald-300">
            <button className="border p-5">Apply</button>
          </div>
        </div>
        <div className="pr-5 pt-7">
          <div className="flex justify-between pt-2">
            <p>Subtotal</p>
            <p>KSH 16,000</p>
          </div>
          <div className="flex justify-between pt-7 ">
            <p>Delivery Fee</p>
            <p>KSH 450</p>
          </div>
        </div>
        <div className="flex justify-between pr-5 pt-9 border-t-black">
          <p>Total</p>
          <p>KSH 16,450</p>
        </div>
        <div className="border w-[60%] bg-emerald-300 p-5 flex justify-center rounded-lg ml-12 mt-7">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
export default AddToCart;