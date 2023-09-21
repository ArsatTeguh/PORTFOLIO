import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";

import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const Laptop = React.lazy(() => import("./Components/3d_models"));
const MainIndex = React.lazy(() => import("./Components/Project"));
const Home = React.lazy(() => import("./Components/Home/Home"));
const Person = React.lazy(() => import("./Components/person"));
const Footer = React.lazy(() => import("./Components/footer/footer"));
const Skils = React.lazy(() => import("./Components/piramida/skils"));

// import Home from "./Components/Home/Home";
// import Person from "./Components/person";
// import Skils from "./Components/piramida/skils";
// import Footer from "./Components/footer/footer";
// import MainIndex from "./Components/Project";
// import Laptop from "./Components/3d_models";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div class="loader">
        <span className="font-[Poppins] font-[500] text-xl laptop:text-2xl ">
          Sedang Memuat Content
        </span>
        <div class="progress"></div>
      </div>

      <div className="relative">
        <Home />
        <Suspense fallback="Loading">
          <Person />
          <Laptop />
        </Suspense>
      </div>

      <div className="three relative ">
        <Skils />
        <MainIndex />
        <Footer />
      </div>
    </div>
  );
}

export default App;
