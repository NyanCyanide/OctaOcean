import { useState } from "react";
import Axios from "axios";

function Report() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const createMessage = (event) => {
    event.target.reset();
    event.preventDefault()
    Axios.post("http://localhost:3001", {
      name: Name,
      email: Email,
      message: Message,
    }).then(() => {console.log("success")});
  };

  return (
    <>
      <section className="selection:bg-lime-400 selection:text-black  my-6 flex flex-col items-center">
        <div className="mx-2 md:mx-32 py-4 items-center flex flex-col md:flex-row text-white border-2 bg-black bg-opacity-80 rounded-xl border-black">
          <div className="flex flex-col items-center md:items-start px-4 md:px-20">
            <p className="text-5xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
              Connect Us
            </p>
            <p className="text-xl font-bold text-center md:text-left my-5">
              A Thank you Note? Oh! did we do something wrong? Message us
              anything we will reply to you!
            </p>
            <p className="text-xl font-bold">Anything Unusual...?</p>
            <p className="text-xl font-bold mt-4">
              <span className="text-rose-500">Report: </span> 080-92929292
            </p>
            <p className="text-xl font-bold">
              <span className="text-blue-300">Email: </span>octaocean@github.in
            </p>
          </div>
          <form
            onSubmit={createMessage}
            className="flex flex-col md:pr-16 md:w-1/2"
          >
            <div className="flex flex-col my-2">
              <label className="text-xl font-bold" htmlFor="nameid">
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
                className=" focus:border-indigo-500 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="text-xl font-bold" htmlFor="emailid">
                Email
              </label>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                autoComplete="off"
                id="emailid"
                required={true}
                placeholder="johndoe@hotmail.com"
                className=" focus:border-indigo-500 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl font-bold" htmlFor="cc">
                Message
              </label>
              <textarea
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                required={true}
                placeholder="Here Goes your Message"
                className="focus:border-indigo-500 my-1 bg-cyan-100 focus:bg-cyan-300 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-lg "
                id="cc"
                cols="30"
                rows="3"
                autoComplete="off"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 text-white shadow-md shadow-red-400 my-3 rounded-xl font-bold bg-gradient-to-tr from-yellow-500 to-red-500  hover:bg-cyan-400 hover:text-black hover:bg-gradient-to-t duration-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Report;
