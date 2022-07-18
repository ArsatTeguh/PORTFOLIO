import React from "react";
import './app.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Headers/Header";
import Profil from "./Components/Profil/Profil";
import Main1 from "./Components/Project/main1";
import Main2 from "./Components/Project/main2";
import Main3 from "./Components/Project/main3";
import Skil from "./Components/skils/skil";
import Footer from "./Components/footer/footer";
import { DataContext } from "./feature";


function App() {
  return (
    <div >
      <DataContext>
        <Header />
        <Home />
        <Profil />
        <Skil />
        <Main1 />
        <Main2 />
        <Main3 />
        <Footer />
      </DataContext>
    </div>
  );
}

export default App;
