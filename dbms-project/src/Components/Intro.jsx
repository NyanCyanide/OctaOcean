import React from "react";
import CPU from "../Assets/CPU1.png";

export default function Intro() {
  return (
    <>
      <section className="selection:bg-lime-400 selection:text-black my-6 flex flex-col items-center">
        <div className=" mx-2 py-4 md:py-16 md:mx-32 border-2 bg-black bg-opacity-80 rounded-xl border-black">
          <p className="text-center p-4 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Blazingly Fast Computing Solutions
          </p>
          <div className="flex flex-col mx-2 md:mx-32 md:flex-row-reverse items-center  justify-between my-4">
            <img
              src={CPU}
              className="hover:hue-rotate-90 hover:rotate-12 duration-500 w-1/2 h-1/2 md:w-1/4 md:h-1/4"
              alt=""
            />
            <div className="py-8 px-4">
              <p className="text-white text-xl text-center md:pr-20 md:text-left font-bold ">
                We at Octa Ocean deliver Cloud Solutions to you to accelerate your growth. In
                this Computing Ocean we save your prices and also provide a well
                built infrastructure. Go HyperScape with our technologies!
              </p>
              <div className="mt-10 text-center md:text-left ">
                <a className="bg-gradient-to-bl shadow-lg shadow-pink-300 hover:from-purple-500 hover:to-pink-500 from-pink-500 to-purple-500 text-white font-bold  rounded-lg py-2 mx-1 md:mx-0 px-4 duration-500 hover:text-black" href="/instances">
                  EC2 Instance
                </a>
                <a className="bg-gradient-to-bl shadow-lg shadow-pink-300 hover:bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg mx-1 md:mx-5 py-2 px-4 duration-500 hover:from-purple-500 hover:to-pink-500 hover:text-black" href="/storagebuckets">
                  Storage Bucket
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
