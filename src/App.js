import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Headers/Header";
import Profil from "./Components/Profil/Profil";
import Navbars from "./Components/Navbar/Navbars";
import Line from "./Components/Line/Line";
import Main1 from "./Components/Project/main1";
import Main2 from "./Components/Project/main2";


function App() {

  return (
    <>
    <Header />
      <Navbars />
      <Home />
      <Line />
      <Profil />
      <Main1  />
      <Main2 />
    </>
  );
}

export default App;
