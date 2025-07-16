import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "./landing.css";
import Landing from "./Landing";
// import ReactLenis from "lenis/react";

const App = () => {
  
  return (
    
    <>
    {/* <ReactLenis root> */}
    <a className="whatsapp-btn" target="_blank" href="https://wa.me/+201040031584?text=السلام%20عليكم%20كنت%20عاوز/ة%20أعرف%20تفاصيل">
    <i className="fa-brands fa-whatsapp"></i>
    </a>
      {/* Start Navbar */}
    <Navbar />
      {/* End Navbar */}
    <div className="container-page" >
    <Landing/>
    </div>
    {/* </ReactLenis> */}
</>

  );
};

export default App;
