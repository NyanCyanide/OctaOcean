import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Purchasedetailss() {
  const [messagesdata, setmessagesdata] = useState([]);

  useEffect(() => {
    const getdatamessages = () => {
      Axios.get("http://localhost:3001/storagepurchase").then((response) => {
        console.log(response);
        console.log("success");
        setmessagesdata(response.data);
      });
    };

    getdatamessages();
  }, []);

  return (
    <section className="selection:bg-lime-400 selection:text-black my-6 flex flex-col">
      <div className="mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl">
        <div className="my-5 md:px-20">
          <p className="text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent pb-4 bg-gradient-to-r from-yellow-500 to-yellow-300">
            Storage Purchase
          </p>
        </div>
        <div className=" mt-4 mb-10 px-6 md:px-20 overflow-x-scroll">
          <table className="table-auto mx-auto md:mx-0 text-white text-left">
            <thead>
              <tr className="bg-amber-500 text-black text-lg">
                <th className="py-2 px-2 text-center border-white border-2">ID</th>
                <th className="py-2 px-2 text-center border-white border-2">Name</th>
                <th className="py-2 px-2 text-center border-white border-2">Email</th>
                <th className="py-2 px-2 text-center border-white border-2">Phone</th>
                <th className="py-2 px-2 text-center border-white border-2">Storage</th>
                <th className="py-2 px-2 text-center border-white border-2">Network</th>
                <th className="py-2 px-2 text-center border-white border-2">Duration</th>
                <th className="py-2 px-2 text-center border-white border-2">Card</th>
                <th className="py-2 px-2 text-center border-white border-2">Purchase Value</th>
              </tr>
            </thead>
            <tbody>
            {messagesdata.map((message) => (
              <>
                <tr className={message.id%2 === 0 ? "bg-yellow-200 text-base text-black" : "bg-yellow-100 text-base text-black"}>
                  <th className="py-2 text-sm text-center px-4 border-white border-2">{message.id}</th>
                  <th className="py-2 text-sm px-4 border-white border-2">{message.name}</th>
                  <th className="py-2 text-sm px-4 border-white border-2"><a href={"mailto:"+message.email}>{message.email}</a></th>
                  <th className="py-2 text-sm text-center px-4 border-white border-2">{message.phno}</th>
                  <th className="py-2 text-sm text-center px-4 border-white border-2">{message.storage}</th>
                  <th className="py-2 text-sm text-center px-4 border-white border-2">{message.network}</th>
                  <th className="py-2 text-sm text-center px-4 border-white border-2">{message.duration}</th>
                  <th className="py-2 text-sm px-4 border-white border-2">{message.card.slice(0, 4) + " XXXX XXXX XXXX"}</th>
                  <th className="py-2 text-sm px-4 text-center border-white border-2">{message.purchasevalue} Rs</th>
                </tr>
              </>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
