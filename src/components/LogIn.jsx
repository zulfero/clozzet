import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
function LogIn() {
  const [showPassword, setshowPassword] = useState(false);
  function handleShowPassword(){
setshowPassword(prev=>!prev)
  }
  return (
    <div className="container mx-auto flex justify-between w-[90%] h-[70vh] py-9">
      <div className="">
        <img className="" src="src/assets/images/login.png" alt="" />
      </div>
      <div className="w-[40%]">
        <h1 className="position absolute right-[9.5em]  text-4xl items place-self-center">
          Login to your Account
        </h1>
        <input
          className="border border-[grey] rounded-full flex my-[5em] px-[11.3em] py-6"
          type="Email"
          placeholder="Email Adress"
        />
        <div className=" flex items-center border border-[grey] rounded-full pr-4 ">
          <input
            className="flex-1 bg-transparent outline-none  my-1 px-[3em] py-5"
            type={showPassword?"password":"text"}
            placeholder="Password"
          />
          <div onClick={handleShowPassword} className="cursor-pointer gap-2 flex">
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex gap-4 items-center text-[1.2em]">
            <input className="size-[.em]" type="checkbox" />
            <p>Remember Me</p>
          </div>
          <p>
            <span className="text-emerald-300 text-2xl">Forgot Password?</span>
          </p>
        </div>
        <div>
          <button className="border rounded-full text-[white] bg-emerald-400 my-11 py-7 text-[1.1em] px-[14em]">
            sign in
          </button>
        </div>
        <div>
          <button className="border rounded-full text-[blue]  py-7 text-[1.1em] px-[12em] shadow-">
            Log In With Google
          </button>
        </div>
        <div>
          <p className="flex justify-center my-9 text-[1.4em] gap-4">
            Don't Have An Account Yet?{" "}
            <span className="text-emerald-300">Sign Up Free</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default LogIn;
