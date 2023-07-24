import { AnimatePresence } from "framer-motion";
import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import "../responsive/Project1/index.css";
import "./main1.css";

const Main1 = (props) => {
  const { title, icon, des } = props;

  return (
    <AnimatePresence>
      <div className={`containers-main1 w-full h-full`}>
        <div className="container-card ">
          <div className="card shadow-2xl">
            <Row lg="2" md="2" xs="1">
              <Col>
                <div className={`txtprojext1`}>
                  <h2>{title}</h2>
                  <p>{des}</p>
                  <button className="btn-project">Let's preview</button>
                </div>
              </Col>
              <Col>
                <div className="img-content-header">
                  <img src={icon} alt="project" loading="lazy" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default memo(Main1);
