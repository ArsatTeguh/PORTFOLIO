import React from "react";
import { Col, Row } from "react-bootstrap";
import "../responsive/Home/index.css";
import "./Home.css";
import MainHome from "./mainHome";

const Home = () => {
  return (
    <div className={` home `}>
      <div className="container singgah">
        <Row>
          <Col md={8}>
            <div className="homeText">
              <h2 style={{ color: "white" }}>
                RESPONSIVE WEB DESIGN DEVELOPMENT
              </h2>

              <h2
                className="text-prof gradient-text"
                style={{ color: "black" }}
              >
                WEB-DEVELOPER
              </h2>
              <span className="sub-home">
                not only a design issue, but the performance and stability of a
                website becomes more important.
              </span>
              <main>
                <MainHome />
              </main>
            </div>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
      <div className="blurs"></div>
      <div className="blur2"></div>
      <div className="blur3"></div>
      <div className="blur4"></div>
    </div>
  );
};

export default Home;
