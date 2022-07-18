import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import "../responsive/Home/index.css";
import * as VscIcons from "react-icons/vsc";
import profil from "../../assets/profil.png";
import background from "../../assets/svg.png";
import { useStore } from "../../feature";


const Home = () => {
  const [state, addThema] = useStore()

  return (
    <div className={` home ${state.thema ? 'mode-dark' : ''}`}>
      <div className="container-fluid singgah">
      <div className={`btn-thema }`} style={{zIndex:'11'}}>
      <span onClick={() => addThema({type:'THEMA_MODE', value: !state.thema})} className={`btn-mode ${state.thema ? 'btn-dark' : ''} `}><VscIcons.VscColorMode/></span>
      </div>
        <Row>
          <Col>
            <div className="profil-home">
              <img
                style={{ width: "30em" }}
                src={background}
                alt="..."
                className="img-bc"
              />

              <img
                style={{ width: "13rem" }}
                src={profil}
                class="rounded-circle img-profil"
                alt="..."
              />
            </div>
          </Col>
          <Col>
            <div className="homeText">
              <h2>Hello,.</h2>
              <h2>Iam Teguh </h2>
              <h2 className="text-prof">Web Developer </h2>
            </div>
          </Col>
        </Row>
      
      </div>
      <div className="blur"></div>
      <div className="blur2"></div>
      <div className="blur3"></div>
      <div className="blur4"></div>
    </div>
  );
};

export default Home;
