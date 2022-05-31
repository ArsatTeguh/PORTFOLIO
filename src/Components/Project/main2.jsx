import React, {useState} from "react";
import { Container, Col, Row } from "react-bootstrap";
import './main2.css'
import '../responsive/Project2/index.css'
import cr1 from "../../assets/cr1.png";
import git from '../../assets/github.png'
import {motion} from 'framer-motion'
import Modal from '../Modal/modal'

const Main2 = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className="containers-main2">
      <Container className="justify-content-center">
        <Row lg="2" md="2" xs="1">
        <Col>
            <div className="galery2">
              <img src={cr1} alt="" />
            </div>
          </Col>
          <Col>
            <div className="txtprojext2">
              <h2>APP CRUD</h2>
              <p>
                  App CRUD sebagai rana implementasi pemahaman saya tentang interaksi API dan penerapan State Management UseContext dan UseReducer selaku State Management Internal React Js. Serta Penerapan State Management External yaitu React-Redux-Toolkit.
              </p>
              <div className="git">
              <motion.img onClick={() => setModal(true)}  src={git} alt="" 
              whileHover={{scale:1.2}}
              />
            </div>
            </div>
            {
              modal && (<Modal modal={modal} setModal={setModal} />)
            } 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main2;
