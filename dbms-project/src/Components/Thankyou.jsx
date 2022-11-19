import React from "react";
import cat from "../Assets/catop.jpg";

function Thankyou() {
  return (
    <section className="selection:bg-lime-400 selection:text-black my-6 flex flex-col items-center">
      <div className=" mx-2 py-4 md:py-16 md:mx-32 border-2 bg-black bg-opacity-80 rounded-xl border-black">
        <p className="text-center p-4 mx-5 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-green-700">
          Thank you for purchasing our product!!
        </p>
        <div className="flex flex-row justify-center">
          <img src={cat} alt="beluga happy" className="my-4 scale-95 md:scale-100 saturate-200 rounded-xl duration-500" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-xl text-center md:text-2xl font-bold">Look at your Email to access cloud power ❤️‍🔥</p>
          <a className="text-black py-1 px-4 hover:from-lime-800 hover:to-green-600 duration-500 hover:text-white shadow-lg shadow-lime-500 my-4 rounded-xl text-center md:text-2xl text-xl font-bold bg-gradient-to-tr from-lime-600 to-lime-200" href="/">Go Back To Home</a>
        </div>
      </div>
    </section>
  );
}

export default Thankyou;
