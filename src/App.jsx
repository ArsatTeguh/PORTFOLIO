import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { DataContext } from "./feature";
import "./App.css";

const Laptop = React.lazy(() => import("./Components/3d_models"));
const MainIndex = React.lazy(() => import("./Components/Project"));
const Home = React.lazy(() => import("./Components/Home/Home"));
const Person = React.lazy(() => import("./Components/person"));
const Footer = React.lazy(() => import("./Components/footer/footer"));
const Skils = React.lazy(() => import("./Components/piramida/skils"));

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div class="loader">
        <span className="font-[Poppins] font-[500] text-xl laptop:text-2xl ">
          Sedang Memuat Content
        </span>
        <div class="progress"></div>
      </div>
      <DataContext>
        <div className="relative">
          <Home />
          <Person />
          <Suspense fallback="Loading">
            <Laptop />
          </Suspense>
        </div>
        <div className="three relative">
          <Skils />
          <MainIndex />
          <Footer />
        </div>
      </DataContext>
    </div>
  );
}

export default App;
