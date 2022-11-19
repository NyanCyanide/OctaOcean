// React Components
import React, { useEffect, useState } from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

// Images
import harddisk from "../Assets/harddisk.png";
import networkimage from "../Assets/network.png";


export default function Storage() {
  const [storage, setstorage] = useState([]);
  const [network, setnetwork] = useState([]);
  const [month, setmonth] = useState([]);

    let history = useNavigate();

  const [storagedata, setstoragedata] = useState([]);
  const [networkdata, setnetworkdata] = useState([]);
  const [monthdata, setmonthdata] = useState([]);

  const call = (event) => {
    const prototype = {
      type: "Storage",
      storage: storage.space,
      storage_pr: storage.price,
      network: network.speed,
      network_pr: network.price,
      months: month.months,
      months_val: month.value
    };
    console.log(prototype);
    history("/purchase", {state: prototype});
    event.preventDefault()
  }



  useEffect(() => {
    const getdatastorage = () => {
      Axios.get("http://localhost:3001/storagedata").then((response) => {
        console.log(response);
        console.log("success");
        setstoragedata(response.data);
      });
    };

    const getdatanetwork = () => {
      Axios.get("http://localhost:3001/networkdata").then((response) => {
        console.log(response);
        console.log("success");
        setnetworkdata(response.data);
      });
    };

    const getdatamonth = () => {
      Axios.get("http://localhost:3001/durationmonthdata").then((response) => {
        console.log(response);
        console.log("success");
        setmonthdata(response.data);
      });
    };

    getdatastorage();
    getdatanetwork();
    getdatamonth();
  }, []);

  return (
    <>
      <section className="selection:bg-lime-400 selection:text-black my-6 flex flex-col">
        <div className="mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl">
          <div className="my-5 md:px-20">
            <p className="text-center pb-4 my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300">
              Storage Buckets
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0">
              No pendrive? No storage in system? Save your files here!
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0">
              Transfer Files through our secured built network system
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0"></p>
          </div>
          <form className="my-5 px-6 md:px-20">
            <div>
              <p className="text-white text-xl font-bold  md:px-0">Storage</p>
              <hr className="my-2 md:mx-0" />
              <div className="my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4">
                {storagedata.map((stick) => (
                  <>
                    <div>
                      <input
                        type="radio"
                        className="hidden peer"
                        name="spacesize"
                        value={stick}
                        id={stick.space}
                        required={true}
                        onChange = {() => {setstorage(stick);}}
                      />
                      <label
                        htmlFor={stick.space}
                        className="cursor-pointer text-white shadow-lg shadow-lime-500  rounded-lg border-2 border-lime-200 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-200 peer-checked:text-black"
                      >
                        <img src={harddisk} alt="" className="h-20 w-20" />
                        <p className="font-bold text-xl">{stick.space}</p>
                        <p className="text-green-400 peer-focus-visible:text-green-800">
                          {stick.price} Rs/hour
                        </p>
                      </label>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-xl font-bold  md:px-0">
                Network Speed
              </p>
              <hr className="my-2  md:mx-0" />
              <div className="my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4">
                {networkdata.map((compute) => (
                  <div>
                    <input
                      type="radio"
                      className="hidden peer"
                      id={compute.speed}
                      value={compute}
                      name="networkpower"
                      required={true}
                      onChange = {() => {setnetwork(compute);}}
                    />
                    <label
                      htmlFor={compute.speed}
                      className="cursor-pointer text-white shadow-lg shadow-blue-500  rounded-lg border-2 border-cyan-700 flex flex-col items-center px-2 py-4 bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black"
                    >
                      <img src={networkimage} alt="" className="h-20 w-20" />
                      <p className="font-bold text-xl">{compute.speed}</p>
                      <p className="text-sky-400">{compute.price} Rs/hour</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-xl font-bold  md:px-0">Duration</p>
              <hr className="my-2 md:mx-0" />
              <div className="my-5 grid grid-flow-row grid-cols-2 gap-x-4  md:gap-x-8 gap-y-8 md:grid-cols-4">
                {monthdata.map((time) => (
                  <>
                    <div>
                      <input
                        type="radio"
                        className="hidden peer"
                        id={time.months}
                        value={time}
                        required = {true}
                        onChange={() => {setmonth(time);}}
                        name="durationmonth"
                      />
                      <label
                        htmlFor={time.months}
                        className="cursor-pointer text-white shadow-lg shadow-purple-700  rounded-lg border-2 border-purple-800 flex flex-col items-center bg-slate-800 duration-500 hover:bg-slate-900 peer-checked:bg-slate-100 peer-checked:text-black"
                      >
                        <p className="font-bold text-xl p-1">{time.months}</p>
                      </label>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center my-6">
              <button
                className="bg-gradient-to-bl shadow-lg shadow-sky-300 hover:bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold rounded-lg my-6 md:w-1/4 w-full  md:mx-5 md:px-20 py-2 px-4 duration-500 hover:from-blue-500 hover:to-sky-500 hover:text-white"
                onClick={(event) => {call(event)}}
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
