import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

// const messagedata = [
//   {
//     id: 1,
//     Name: "John",
//     Message: "Hello",
//     Email: "something@gmail.com",
//     Acknowledge: false,
//     time: "12:00",
//   },
//   {
//     id: 2,
//     Name: "John",
//     Message: "Nice to meet you",
//     Email: "sdfsd@sdfsdf.sdf",
//     Acknowledge: false,
//     time: "12:00",
//   },
//   {
//     id: 3,
//     Name: "John",
//     Message: "How are you?",
//     Email: "sdhnfb@ksdbf.sjdfb",
//     Acknowledge: false,
//     time: "12:00",
//   },
// ];

export default function Messages() {
  const [messagesdata, setmessagesdata] = useState([]);

  function respond(myid){
    Axios.put("http://localhost:3001/messageread", {id: myid}).then((response) => {
      console.log("Responded")
    });
    popelement(myid);
  };

  function remove(myid) {
    Axios.delete(`http://localhost:3001/messagedelete/${myid}`).then((response) => {
      console.log("Deleted");
    });
    popelement(myid);
  }

  function popelement(myid) {
    setmessagesdata(messagesdata.filter((item) => item.id !== myid));
  }

  useEffect(() => {
    console.log("skhbkhsdb" + process.env.REACT_APP_IP_ADDRESS)

    const getdatamessages = () => {
      Axios.get("http://localhost:3001/messages").then((response) => {
        console.log(response)
        console.log('success');
        setmessagesdata(response.data);
      })
    }

    getdatamessages();
  }, [])

  return (
    <section className="selection:bg-lime-400 selection:text-black my-6 flex flex-col">
      <div className="mx-2 mt-4 md:mx-32 py-8 bg-black bg-opacity-80 rounded-xl">
        <div className="my-5 md:px-20">
          <p className="text-center my-4 md:text-left text-5xl font-bold md:text-6xl bg-clip-text text-transparent pb-4 bg-gradient-to-r from-rose-500 to-yellow-300">
            Messages
          </p>
        </div>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 mt-4 mb-10 px-6 md:px-20 gap-6">
          {messagesdata.map((message) => (
              <>
                <div id={"message" + message.id} className="text-white shadow-lg shadow-sky-600 border-2 border-cyan-900 bg-slate-900 rounded-lg px-4 py-2 hover:from-lime-300">
                  <p className="text-3xl md:text-4xl text-slate-200 font-bold">
                    {message.name}
                  </p>
                  <p className="my-2 font-semibold tracking-wide text-blue-400">
                    <a href={"mailto:" + message.email}>{message.email}</a>
                  </p>

                  <p className="text-slate-200 font-bold tracking">
                    {message.message}
                  </p>
                  <div className="my-4 flex flex-row justify- md:justify-start">
                    <button
                      onClick={() => {respond(message.id)}}
                      className="border-2 border-green-700 bg-gradient-to-tr from-lime-400 to-lime-800 shadow-lg hover:bg-gradient-to-bl hover:text-black duration-500 shadow-lime-400 rounded-lg font-bold text-white py-1 px-8"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => {remove(message.id)}}
                      className="border-2 border-red-800 hover:bg-gradient-to-bl hover:text-black bg-gradient-to-tr from-rose-400 bg-rose-800 shadow-lg shadow-red-400 duration-500 rounded-lg font-bold text-white mx-2 py-1 px-8"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </section>
  );
}
