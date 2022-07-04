import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import "../responsive/Home/index.css";
import profil from "../../assets/profil.png";
import background from "../../assets/svg.png";

const Home = () => {
  return (
    <div className="home">
      <div className="container-fluid">
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
    </div>
  );
};

export default Home;
