// React Components
import React, { useEffect, useState } from "react";
import Axios from "axios";
// Images
import microsoft from "../Assets/microsoft.png";
import linux from "../Assets/linux.png";
import macintosh from "../Assets/macintosh.jpg";
import android from "../Assets/android.png";
import ram from "../Assets/RAM.png";
import cpu from "../Assets/cpu2.png";

// const OS = [
//   {
//     os: "Windows 11",
//     image: "microsoft",
//     developed: "Microsoft",
//     price: 100,
//   },
//   {
//     os: "Windows 10",
//     image: "microsoft",
//     developed: "Microsoft",
//     price: 100,
//   },
//   {
//     os: "Windows 8",
//     image: "microsoft",
//     developed: "Microsoft",
//     price: 100,
//   },
//   {
//     os: "Ubuntu Linux",
//     image: "linux",
//     developed: "Linux",
//     price: 100,
//   },
//   {
//     os: "Kali Linux",
//     image: "linux",
//     developed: "Linux",
//     price: 100,
//   },
//   {
//     os: "Parrot Os",
//     image: "linux",
//     developed: "Linux",
//     price: 100,
//   },
//   {
//     os: "Red Hat",
//     image: "linux",
//     developed: "Linux",
//     price: 100,
//   },
//   {
//     os: "Mac Sierra",
//     image: "macintosh",
//     developed: "Apple",
//     price: 100,
//   },
//   {
//     os: "Mac Mojave",
//     image: "macintosh",
//     developed: "Apple",
//     price: 100,
//   },
//   {
//     os: "Android",
//     image: "android",
//     developed: "Linux",
//     price: 100,
//   },
// ];

// const RAM = [
//   {
//     RAM: "8 GB",
//     value: 8,
//     price: 2,
//   },
//   {
//     RAM: "16 GB",
//     value: 16,
//     price: 2,
//   },
//   {
//     RAM: "32 GB",
//     value: 32,
//     price: 2,
//   },
//   {
//     RAM: "64 GB",
//     value: 64,
//     price: 2,
//   },
//   {
//     RAM: "128 GB",
//     value: 128,
//     price: 2,
//   },
//   {
//     RAM: "256 GB",
//     value: 256,
//     price: 2,
//   },
// ];

// const CPU = [
//   {
//     CPU: "4 vCPU",
//     value: 4,
//     price: 2,
//   },
//   {
//     CPU: "8 vCPU",
//     value: 8,
//     price: 2,
//   },
//   {
//     CPU: "16 vCPU",
//     value: 16,
//     price: 2,
//   },
//   {
//     CPU: "32 vCPU",
//     value: 32,
//     price: 2,
//   },
//   {
//     CPU: "64 vCPU",
//     value: 64,
//     price: 2,
//   },
// ];

// const duration = [
//   {
//     hour: "1 Hour",
//     value: 1,
//   },
//   {
//     hour: "2 Hours",
//     value: 2,
//   },
//   {
//     hour: "4 Hours",
//     value: 4,
//   },
//   {
//     hour: "6 Hours",
//     value: 6,
//   },
//   {
//     hour: "12 Hours",
//     value: 12,
//   },
//   {
//     hour: "24 Hours",
//     value: 24,
//   },
// ];

export default function Instances() {
  const [osdata, setosdata] = useState([]);
  const [ramdata, setramdata] = useState([]);
  const [cpudata, setcpudata] = useState([]);
  const [durationhourdata, setdurationhourdata] = useState([]);

  useEffect(() => {
    const getdataos = () => {
      Axios.get("http://localhost:3001/osdata").then((response) => {
        console.log(response);
        console.log("success");
        setosdata(response.data);
      });
    };

    const getdataram = () => {
      Axios.get("http://localhost:3001/ramdata").then((response) => {
        console.log(response);
        console.log("success");
        setramdata(response.data);
      });
    };

    const getdatacpu = () => {
      Axios.get("http://localhost:3001/cpudata").then((response) => {
        console.log(response);
        console.log("success");
        setcpudata(response.data);
      });
    };

    const getdatadurationhour = () => {
      Axios.get("http://localhost:3001/durationhourdata").then((response) => {
        console.log(response);
        console.log("success");
        setdurationhourdata(response.data);
      });
    };

    getdatadurationhour();
    getdatacpu();
    getdataram();
    getdataos();
  }, []);

  return (
    <>
      <section className="selection:bg-lime-400 selection:text-black my-6 flex flex-col">
        <div className="mx-2 mt-4 md:mx-32 bg-black bg-opacity-80 rounded-xl">
          <div className="my-5 md:px-20">
            <p className="text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300">
              EC 2 Instances
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0">
              With our Premium high Speed delivery Cloud Services get Started
              right away!
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0">
              Prices starting as low from 0.03&#8377; per second and fully
              customisable and controllable
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0"></p>
          </div>
          <form className="my-5 px-6 md:px-20">
            <div>
              <p className="text-white text-xl font-bold md:px-0">
                Operating System
              </p>
              <hr className="my-2 md:mx-0" />
              <div className="my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4">
                {osdata.map((system) => (
                  <>
                    <div>
                      <input
                        type="radio"
                        className="hidden peer"
                        name="operatingsystem"
                        value={system}
                        id={system.name}
                        required={true}
                      />
                      <label
                        htmlFor={system.name}
                        className={
                          "text-white cursor-pointer shadow-pink-600 shadow-lg rounded-lg  border-2 border-pink-500 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:border-rose-500 peer-checked:bg-slate-100 peer-checked:text-black " +
                          ""
                        }
                      >
                        <img
                          src={
                            system.image === "microsoft"
                              ? microsoft
                              : system.image === "linux"
                              ? linux
                              : system.image === "macintosh"
                              ? macintosh
                              : android
                          }
                          className="h-14 w-14"
                          alt=""
                        />
                        <p className="text-xl font-bold mt-2">{system.name}</p>
                        <p className="text-lg font-semi-bold ">
                          {system.developer}
                        </p>
                        <p className="text-pink-600 font-semibold">
                          {system.price} Rs/s
                        </p>
                      </label>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-xl font-bold  md:px-0">RAM</p>
              <hr className="my-2 md:mx-0" />
              <div className="my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4">
                {ramdata.map((stick) => (
                  <>
                    <div>
                      <input
                        type="radio"
                        className="hidden peer"
                        name="ramsize"
                        value={stick}
                        id={stick.name}
                        required={true}
                      />
                      <label
                        htmlFor={stick.name}
                        className="cursor-pointer text-white shadow-lg shadow-lime-500  rounded-lg border-2 border-lime-200 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black"
                      >
                        <img src={ram} alt="" className="h-20 w-20" />
                        <p className="font-bold text-xl">{stick.name}</p>
                        <p className="text-green-400 peer-focus-visible:text-green-800">
                          {stick.price} Rs/s
                        </p>
                      </label>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-xl font-bold  md:px-0">CPU's</p>
              <hr className="my-2  md:mx-0" />
              <div className="my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4">
                {cpudata.map((compute) => (
                  <div>
                    <input
                      type="radio"
                      className="hidden peer"
                      id={compute.cpu}
                      value={compute}
                      name="computingpower"
                    />
                    <label
                      htmlFor={compute.cpu}
                      className="cursor-pointer text-white shadow-lg shadow-blue-500  rounded-lg border-2 border-cyan-700 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black"
                    >
                      <img src={cpu} alt="" className="h-20 w-20" />
                      <p className="font-bold text-xl">{compute.cpu}</p>
                      <p className="text-sky-400">{compute.price} Rs/s</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-xl font-bold  md:px-0">Duration</p>
              <hr className="my-2 md:mx-0" />
              <div className="my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4">
                {durationhourdata.map((time) => (
                  <>
                    <div>
                      <input
                        type="radio"
                        className="hidden peer"
                        id={time.hours}
                        value={time}
                        name="duration"
                      />
                      <label
                        htmlFor={time.hours}
                        className="cursor-pointer text-white shadow-lg shadow-purple-700  rounded-lg border-2 border-purple-800 flex flex-col items-center bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black"
                      >
                        <p className="font-bold text-xl p-1">{time.hours}</p>
                      </label>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center my-6">
              <button
                className="bg-gradient-to-bl mt-6 mb-6 shadow-lg shadow-sky-300 hover:bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-lg  md:mx-5 md:px-20 py-2 w-full md:w-1/4 duration-500 hover:from-blue-500 hover:to-sky-500 hover:text-white"
                type="submit"
              >
                Purchase
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
