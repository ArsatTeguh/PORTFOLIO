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
    <div className="">
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
