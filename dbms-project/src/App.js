import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Intro from "./Components/Intro.jsx";
import Report from "./Components/Report.jsx";
import Instances from "./Components/Instances.jsx";
import Storage from "./Components/Storage.jsx";

import Admin from "./Components/Admin.jsx"

// import AppComponents from "./Components/AddComponents.jsx";
import Error from "./Components/Error.jsx";
import Purchase from "./Components/Purchase.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from "./Components/Thankyou.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Intro /><Report /></>} />
        <Route path="/instances" element={<><Instances /><Report /></>} />
        <Route path="/storagebuckets" element={<><Storage /><Report /></>} />
        <Route path="/admin" element={<><Admin/></>} />
        <Route path="/purchase" element={<><Purchase/><Report/></>} />
        <Route path="/thankyou" element={<><Thankyou/><Report/></>} />
        <Route path="*" element={<Error />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}
