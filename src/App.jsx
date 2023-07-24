import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import { DataContext } from "./feature";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Laptop from "./Components/3d_models";
import Main1 from "./Components/Project/main1";
import Person from "./Components/person";
import Skils from "./Components/piramida/skils";
import MainIndex from "./Components/Project";
import gsap from "gsap";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="">
      <DataContext>
        <div className="relative">
          <Home />
          <Person />
          {/* <Laptop /> */}
        </div>
        <div className="three relative">
          {/* <div className="absolute -top-[0rem] left-0 w-full  ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fill-opacity="1"
                d="M0,64L30,53.3C60,43,120,21,180,21.3C240,21,300,43,360,74.7C420,107,480,149,540,160C600,171,660,149,720,122.7C780,96,840,64,900,64C960,64,1020,96,1080,133.3C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
          </div> */}
          <Skils />
          <MainIndex />
          <Footer />
        </div>
      </DataContext>
    </div>
  );
}

export default App;
