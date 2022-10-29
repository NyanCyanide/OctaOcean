import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Intro from "./Components/Intro.jsx";
import Report from "./Components/Report.jsx";
import Instances from "./Components/Instances.jsx";
import Messages from "./Components/Messages.jsx";
import Storage from "./Components/Storage.jsx";
// import AppComponents from "./Components/AddComponents.jsx";
import Error from "./Components/Error.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/instances" element={<Instances />} />
        <Route path="/storagebuckets" element={<Storage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Report />
      <Footer />
    </BrowserRouter>
  );
}
