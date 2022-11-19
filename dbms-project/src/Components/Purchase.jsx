import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import stripe from "../Assets/stripe.png";
import Axios from "axios";
import {useNavigate} from "react-router-dom";


// import Final from "./Final.jsx";
function Purchase() {
  const location = useLocation();
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setcvv] = useState("");
  const [otp, setotp] = useState("");
  const [phno, setphno] = useState("");

  let history = useNavigate();

  const submitform = (event, data) => {
    if(data.type === "Instances"){
    Axios.post("http://localhost:3001/instancestore", {
      name: name,
      email: email,
      card: card,
      phno: phno,
      type: data.type,
      os: data.os,
      ram: data.ram_,
      cpu: data.cpu_,
      duration: data.duration_,
      purchasevalue: data.duration_ * (data.ospr + data.rampr + data.cpupr),

    }).then(() => {console.log("success"); });
  }
  else if(data.type === "Storage") {
    Axios.post("http://localhost:3001/storagestore", {
      name: name,
      email: email,
      card: card,
      phno: phno,
      type: data.type,
      storage: data.storage,
      network: data.network,
      duration: data.months_val,
      purchasevalue: data.months_val * (data.storage_pr + data.network_pr),

    }).then(() => {console.log("success");});

  }
  history("/thankyou")
  event.preventDefault()


  }

  const Final = () => {
    // console.log(data.type);
    if (data.type === "Instances") {
      return (
        <>
          <table className="table-auto mx-auto md:mx-0 w-5/6 rounded-xl border-white text-xl text-left text-white">
            <thead>
              <tr className="bg-indigo-800">
                <th>Type</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-500 text-black">
                <td className="font-bold">Operating System</td>
                <td>{data.os} </td>
                <td>{data.ospr} Rs/hour</td>
              </tr>
              <tr className="bg-blue-400 text-black">
                <td className="font-bold">RAM</td>
                <td>{data.ram_}</td>
                <td>{data.rampr} Rs/hour</td>
              </tr>
              <tr className="bg-blue-500 text-black">
                <td className="font-bold">CPU</td>
                <td>{data.cpu_}</td>
                <td>{data.cpupr} Rs/hour</td>
              </tr>
              <tr className="bg-blue-400 text-black">
                <td className="font-bold">Duration</td>
                <td>Hourly</td>
                <td>{data.duration_} hours</td>
              </tr>
            </tbody>
          </table>
          <div className="text-white mx-auto my-2">
            <p className="text-xl ml-10 md:ml-0 text-lime-300 font-semibold ">
              Total Price : {" "}
              {data.duration_ * (data.ospr + data.rampr + data.cpupr)} Rs
            </p>
          </div>
        </>
      );
    } else if (data.type === "Storage") {
      return (
        <>
          <table className="table-auto mx-auto md:mx-0 w-5/6 rounded-xl border-white text-xl text-left text-white">
            <thead>
              <tr className="bg-indigo-800">
                <th>Type</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-500 text-black">
                <td className="font-bold">Storage Space</td>
                <td>{data.storage} </td>
                <td>{data.storage_pr} Rs/hour</td>
              </tr>
              <tr className="bg-blue-400 text-black">
                <td className="font-bold">Network Speed</td>
                <td>{data.network}</td>
                <td>{data.network_pr} Rs/hour</td>
              </tr>
              <tr className="bg-blue-500 text-black">
                <td className="font-bold">Duration</td>
                <td>{data.months_val} Months</td>
                <td>{data.months_val} Months</td>
              </tr>
            </tbody>
          </table>
          <div className="text-white my-2">
            <p className="text-xl ml-10 md:ml-0 text-lime-300 font-semibold ">
              Total Price :{" "}
              {data.months_val * (data.storage_pr + data.network_pr)} Rs
            </p>
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    setData(location.state);
  });

  return (
    <>
      <section className="selection:bg-lime-400 selection:text-black my-6 flex flex-col">
        <div className="mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl">
          <div className="my-5 md:px-20">
            <p className="text-center pb-4 my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300">
              Purchase
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0">
              You are one step before to start using the power! Let's get you finish
              the webwork!
            </p>
            <p className="text-white text-center md:text-left text-xl font-bold px-6 md:px-0">
              Let's review your Order Summary:
            </p>
            <p className="text-center pb-4 my-4 md:text-left text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-green-300">
              {data.type}
            </p>
            <div>
              <Final />
            </div>
            <div className="flex flex-col-reverse md:flex-row mx-10 md:mx-0">
              <form
                className="my-4 flex flex-col md:w-1/2"
                
              >
                <div className="flex flex-col md:flex-col">
                  <div className="flex flex-col">
                    <label
                      className="text-xl text-white font-bold"
                      htmlFor="name"
                    >
                      Name
                    </label>

                    <input
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                      type="text"
                      autoComplete="off"
                      required={true}
                      placeholder="John Doe"
                      className=" focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-xl text-white font-bold"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      type="email"
                      autoComplete="off"
                      required={true}
                      placeholder="johndoe@gmail.com"
                      className=" focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-xl text-white font-bold"
                      htmlFor="email"
                    >
                      Phone Number
                    </label>
                    <input
                      onChange={(event) => {
                        setphno(event.target.value);
                      }}
                      pattern="[0-9]{10}"
                      type="number"
                      autoComplete="off"
                      required={true}
                      placeholder="7272727272"
                      className=" focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-col">
                  <div className="flex flex-col">
                    <label
                      className="text-xl text-white font-bold"
                      htmlFor="name"
                    >
                      Credit/Debit Card
                    </label>
                    <input
                      onChange={(event) => {
                        setCard(event.target.value);
                      }}
                      type="number"
                      pattern="[0-9]{12}"
                      autoComplete="off"
                      required={true}
                      placeholder="1234-1234-1234-1234"
                      className=" focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-xl text-white font-bold"
                      htmlFor="email"
                    >
                      CVV
                    </label>
                    <input
                      onChange={(event) => {
                        setcvv(event.target.value);
                      }}
                      pattern="[0-9]{3}"
                      type="number"
                      autoComplete="off"
                      required={true}
                      placeholder="123"
                      className=" focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-xl text-white font-bold"
                      htmlFor="email"
                    >
                      OTP
                    </label>
                    <input
                      onChange={(event) => {
                        setotp(event.target.value);
                      }}
                      pattern="[0-9]{6}"
                      type="number"
                      autoComplete="off"
                      required={true}
                      placeholder="000 000"
                      className=" focus:border-indigo-500 md:w-5/6 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-2 text-white shadow-md shadow-cyan-400 my-3 rounded-xl font-bold bg-gradient-to-tr from-blue-500 to-cyan-500  hover:bg-cyan-400 hover:text-black hover:bg-gradient-to-t duration-500 w-full md:w-5/6"
                    onClick={(event) => {submitform(event, data)}}
                  >
                    Purchase
                  </button>
                </div>
              </form>
              <div className="md:w-1/2 text-white flex flex-col justify-center">
                <img className="rounded-md" src={stripe} alt="stripe logo" />
                <p className="text-2xl text-center my-2">Payments made easy and secure</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Purchase;
