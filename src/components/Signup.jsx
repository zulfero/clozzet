function Signup() {
  return (
    <div className="container mx-auto flex justify-between w-[100%] h-[80vh] p-2">
      <div className="w-[40%] h-[99vh] ">
        <h1 className="text-4xl flex justify-center">Create An Account</h1>
        <div className="mt-[2.3em] flex justify-center gap-2">
          <input
            className="border rounded-full py-[1.6em] px-5"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border rounded-full py-[1.6em] px-5"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-[grey] rounded-full  flex my-9 px-[11em] py-[1.6em]"
          type="Email"
          placeholder="Email Adress"
        />
        <input
          className="border border-[grey] rounded-full  flex my-9 px-[11em] py-[1.6em]"
          type="text"
          placeholder="Phone Number"
        />
        <input
          className="border border-[grey] rounded-full  flex my-9 px-[11em] py-[1.6em]"
          type="text"
          placeholder="Password"
        />
        <input
          className="border border-[grey] rounded-full  flex my-9 px-[11em] py-[1.6em]"
          type="text"
          placeholder="Confirm Password"
        />

        <div>
          <button className="border rounded-full text-bold text-[white] bg-emerald-400 py-[1.6em] text- px-[15em]">
            Create Account
          </button>
        </div>
        <div className="flex items-center m-8 gap-2">
          <div className="bg-black h-[2px] flex-1"></div><p>OR</p><div className="bg-black h-[2px] flex-1"></div>
        </div>
        <div>
          <div className="flex text-xl justify-between border rounded-full text-[blue]  py-[.3em] text-[1em]  px-[10em]">
            <img
              src="src/assets/images/google-color-icon.png"
              alt=""
              width={80}
            />
            <button className="">
              Sign Up With Google
            </button>
          </div>
        </div>
        <div>
          <p className="flex justify-center my-9 text-[1.4em] gap-4">
            Already Have An Account?{" "}
            <span className="text-emerald-300">Log in</span>{" "}
          </p>
        </div>
      </div>
      <div className="">
        <img className="h-[99vh]" src="src/assets/images/signup.png" alt="" />
      </div>
    </div>
  );
}
export default Signup;
