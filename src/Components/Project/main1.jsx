import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./main1.css";
import "../responsive/Project1/index.css";
import { imagesMv } from "./fileimg";
import git from '../../assets/github.png'
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/modal";
import { useStore } from "../../feature";

const Main1 = () => {
  const [modal, setModal] = useState(false);
  const [state] = useStore()
  return (
      <AnimatePresence>
      <div className={`containers-main1 ${state.thema ? 'mode-dark' : ''} `}>
        <Container >
          <Row lg="2" md="2" xs="1">
            <Col>
              <div className={`txtprojext1`}>
                <h2 className={` ${state.thema ? 'mode-dark' : ''}`}>Slicing NETFLIX</h2>
                <p className={` ${state.thema ? 'mode-dark' : ''}`}>
                  Slicing Website NETFLIX saya lakukan untuk mengasah kemampuan
                  saya dalam merancang UI website. Project ini melibatkan
                  Bootsrap dan @MUI sebagai framework untuk desain rangka
                  interface website. Serta untuk assets project saya
                  memanfaatkan webiste aslinya yaitu NETFLIX dan untuk page
                  movie list saya memanfaatkan API MOVIEDB yang open source,
                  oleh sebab itu AXIOS juga saya pakai dalam project ini.
                </p>
                <div className="git">
                <motion.img onClick={() => setModal(true)}  src={git} alt="" 
              whileHover={{scale:1.2}}
              />
              </div>
              </div>
              {modal && <Modal modal={modal} setModal={setModal} to={'https://arsatteguh.github.io/netflix/'} />}
            </Col>
            <Col>
              <div className={`galery justify-content-center   ${state.thema ? 'mode-dark' : ''}`}>
                {imagesMv.map((data, index) => {
                  return (
                    <div key={index} className={`img-content-header`}>
                      <img src={data} alt="" />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="blur-main"></div>
      <div className="blur2-main"></div>
      </div>
    </AnimatePresence>
   
  );
};

export default Main1;
