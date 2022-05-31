import { motion } from "framer-motion";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import "../responsive/Home/index.css"

const Home = () => {
  return (
    <Container>
      <section className="main">
        <Row lg="2" md="2" sm="2" xs="1">
          <Col>
            <div className="homeText">
              <div className="text-home">
                <h2>Hello,.</h2>
                <h2>Iam Teguh !!</h2>               
                <h2 className="text-prof">Web Developer !!</h2>               
              </div>
            </div>
          </Col>
          <Col>
            <div className="homeIcon">
              <div className="icon">
                <h1 className="textIcon">Just Simple</h1>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Home;
