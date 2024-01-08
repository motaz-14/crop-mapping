import React, { useState } from "react";
import LoginPic from "../assets/loginpic.svg";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Field is empty ya fala7");
    } else {
      console.log(email);
      console.log(password);
      window.location.pathname="/dashboard"
      setError(""); // da 34an lw msh empty
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center font-normal overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center lg:flex-row w-11/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 py-16 px-6 lg:px-12">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="emailInput" className="text-secondaryColor max-sm:ml-1">
                  Email Address
                </label>
                <div className="flex justify-start items-center bg-[#f7f7f7] max-sm:mx-1 p-3 rounded-md mt-2">
                  <MdOutlineEmail className="text-[#707070] text-2xl" />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    id="emailInput"
                    className="border-none focus:border-none focus:outline-none outline-none w-full bg-[#f7f7f7]"
                  />
                </div>
                <p>{error && <span className="text-red-500 text-base">{error}</span>}</p>
              </div>

              <div className="mt-5">
                <label htmlFor="passwordInput" className="text-[#707070] max-sm:ml-1">
                  Password
                </label>
                <div className="flex justify-between items-center bg-[#f7f7f7] p-3 rounded-md mt-2 max-sm:mx-1">
                  <IoKeyOutline className="text-secondaryColor text-2xl" />
                  <input
                    className="border-none focus:border-none focus:outline-none outline-none w-full bg-[#f7f7f7]"
                    type={visible ? "text" : "password"}
                    id="passwordInput"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    onClick={() => setVisible(!visible)}
                    className="cursor-pointer "
                  >
                    {visible ? (
                      <FaRegEyeSlash className="text-secondaryColor text-2xl" />
                    ) : (
                      <FaEye className="text-secondaryColor text-2xl" />
                    )}
                  </div>
                </div>
                <p>{error && <span className="text-red-500 text-base">{error}</span>}</p>
              </div>

              <div className="mt-5 flex justify-center w-full">
                <button
                  type="submit"
                  className="text-white cursor-pointer bg-gradient-to-tr from-[#01B68D] to-[#078e6e] border-none focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  me-2 mb-2"
                >
                  دخول
                  <IoIosLogOut className="ms-4 text-secondaryColor text-2xl bg-white p-1 rounded-md" />
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 items-center p-6 lg:p-12 bg-no-repeat bg-cover bg-center max-sm:hidden sm:flex">
            <img
              src={LoginPic}
              alt="LoginPage"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
