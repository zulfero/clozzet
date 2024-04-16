function Footer() {
  return (
    <footer className="bg-[#f0efef] flex flex-col sm:flex-row">
        <div className="container mx-auto">
      <div className="text-center mb-[6em] pt-[3em] ">
        <p className="text-4xl">Subscribe and get up to 30% 0ff</p>
        <input
          className="border mr-9 border-[green] py-5 px-[7em] rounded-full"
          type="Email"
          placeholder="Enter your Email"
        />
        <button className="border border-[green] py-5 px-[5em] rounded-full bg-green-300 flex-col-wrap">
          Subscribe
        </button>
      </div>
      <div className="flex list-none gap-9 leading-[3em]">
        <div>
          <img src="src/assets/images/logo.svg" alt="" />
          <p className="">
            Offering a unique and stylish perspective on fashion is our number
            one priority.Confuse your mirror by our trendy outfits.
          </p>
        </div>
        <div>
          <h2 className="head font-semibold text-[1.5em]">Store</h2>
          <ul>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Store Sale</li>
            <li>collections</li>
          </ul>
        </div>
        <div>
          <h2 className="head font-semibold text-[1.5em]">Help</h2>
          <li>Support</li>
          <li>Terms& Conditions</li>
          <li>Privacy Policy</li>
          <li>Track Your Order</li>
        </div>
        <div>
            
          <h2 className="head font-semibold text-[1.5em]">Contact us</h2>
          <div className="flex gap-5">
          <img
            className="image size-6"
            src="src/assets/images/email.png"
            alt=""
          />
          <li>contact@clozzet.com</li>
          </div>
          <div className="flex gap-6">
          <img
            className="image size-6"
            src="src/assets/images/phone.png"
            alt=""
          />
          <li>254-700-333-333</li>
          </div>
          <div>
            <h2>Follow Us</h2>
            <div className="icons flex gap-6">
              <img
                className="site size-6"
                src="src/assets/images/facebook.png"
                alt=""
              />
              <img
                className="site size-6"
                src="src/assets/images/instagram.png"
                alt=""
              />
              <img
                className="site size-6"
                src="src/assets/images/twitter.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
