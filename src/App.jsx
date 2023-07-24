import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Person from "./Components/person";
import Skils from "./Components/piramida/skils";
import { DataContext } from "./feature";
import Footer from "./Components/footer/footer";
const Laptop = React.lazy(() => import("./Components/3d_models"));
const MainIndex = React.lazy(() => import("./Components/Project"));

function App() {
  return (
    <div className="">
      <DataContext>
        <div className="relative">
          <Home />
          <Person />
          <Laptop />
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
