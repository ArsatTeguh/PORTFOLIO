import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import * as BiIcons from "react-icons/bi";
import { motion } from "framer-motion";

import "../skils/skil.css";
import "./piramida.css";
const Skils = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center end-scroll ">
      <Container>
        <Row className="gy-5 ">
          <span className="py-2 text-center text-2xl laptop:text-3xl font-[Poppins] font-[700] text-white">
            OFTEN I USE
          </span>
          <Col md={5}>
            <div
              className={`piramida flex flex-col justify-center items-center  
              `}
            >
              <div className="satu">
                <span className={`js  icon`}>
                  <DiIcons.DiJavascript1 />
                </span>
              </div>
              <div className="dua">
                <span className={`next  icon`}>
                  <SiIcons.SiNextdotjs />
                </span>
                <span className={`react  icon`}>
                  <DiIcons.DiReact />
                </span>
              </div>

              <div className="tiga">
                <span className={`gitlab  icon`}>
                  <AiIcons.AiFillGitlab />
                </span>
                <span className={`github  icon`}>
                  <BiIcons.BiGitMerge />
                </span>
                <span className={`git  icon`}>
                  <AiIcons.AiFillGithub />
                </span>
              </div>

              <div className="dua">
                <span className={`nest  icon`}>
                  <SiIcons.SiNestjs />
                </span>
                <span className={`node  icon`}>
                  <DiIcons.DiNodejsSmall />
                </span>
              </div>
              <div className="satu">
                <span className={`next icon`}>
                  <SiIcons.SiThreedotjs />
                </span>
              </div>
            </div>
          </Col>
          <Col>
            <div className="des-skil text-transparent hp:w-[90%] laptop:w-[70%] mx-auto">
              <p className="text-5xl hp:text-3xl gradient-text">
                In my view, skill or knowledge will be mastered by itself as
                often or not we use it.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skils;
