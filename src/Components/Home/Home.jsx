import React from "react";
import { Col, Row } from "react-bootstrap";
import { AnimateScroll } from "../lib/animationScroll";
import "../responsive/Home/index.css";
import "./Home.css";
import MainHome from "./mainHome";
import { useStore } from "../../feature";

const Home = () => {
  const [state, addThema] = useStore();

  return (
    <div className={` home ${state.thema ? "mode-dark" : ""}`}>
      <div className="container singgah">
        <Row>
          <Col md={8}>
            <AnimateScroll>
              <div className="homeText">
                <h2 style={{ color: state.thema ? "white" : "black" }}>
                  RESPONSIVE WEB DESIGN DEVELOPMENT
                </h2>

                <h2
                  className="text-prof gradient-text"
                  style={{ color: state.thema ? "white" : "black" }}
                >
                  WEB-DEVELOPER
                </h2>
                <span
                  style={{
                    fontWeight: "500",
                    padding: "10px 0px",
                    fontSize: "16px",
                  }}
                >
                  not only a design issue, but the performance and stability of
                  a website becomes more important.
                </span>
                <main>
                  <MainHome />
                </main>
              </div>
            </AnimateScroll>
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
