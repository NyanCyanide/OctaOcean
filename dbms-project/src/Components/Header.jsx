import React from "react";
import logo from "../Assets/logo.gif";

function Header() {
  return (
    <>
      <header className="shadow-3xl rounded-b-xl font-poppins bg-black bg-opacity-80  flex justify-center">
        <div className="text-white py-2 px-4 md:px-32 container flex flex-row items-center">
          <a href="/" className="flex flex-row items-center">
            <img src={logo} className="w-12 h-12 md:w-14 md:h-14 " alt="Logo" />
            <p className="px-1 font-bold tracking-tighter md:tracking-normal md:px-3 text-xl md:text-2xl ">
              Octa Ocean
            </p>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
