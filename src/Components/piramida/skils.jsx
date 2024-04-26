import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillGitlab } from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import { FaDocker } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const list = [
  {
    icon: <DiIcons.DiJavascript1 />,
    title: 'Vanilla Javascript',
    class: 'js  ',
  },
  { icon: <SiIcons.SiNextdotjs />, class: 'next ', title: 'Next Js' },
  { icon: <DiIcons.DiReact />, class: 'react  ', title: 'React Js' },
  { icon: <AiFillGitlab />, class: 'gitlab  ', title: 'Gitlab' },
  // { icon: <BiIcons.BiGitMerge />, class: "github  ", title: "Github" },
  { icon: <AiFillGitlab />, class: 'git  ', title: 'Gitlab' },
  { icon: <SiIcons.SiNestjs />, class: 'nest  ', title: 'Nest Js' },
  { icon: <DiIcons.DiNodejsSmall />, class: 'node  ', title: 'Node Js' },
  { icon: <SiIcons.SiThreedotjs />, class: 'next ', title: 'Three Js' },
  { icon: <FaDocker />, class: 'react ', title: 'Docker' },
  { icon: <SiIcons.SiMongodb />, class: 'node ', title: 'Postgres' },
  { icon: <BiLogoPostgresql />, class: 'next ', title: 'Postgres' },
  
];

import { AnimateScroll } from '../lib/animationScroll';
import '../skils/skil.css';

const Skils = () => {
  return (
    <div className="project  w-full h-full py-[4rem] lg:h-screen flex justify-center items-center relative ">
      <Container>
        <Row className="gap-x-4 px-4 ">
          <div className="py-2 text-2xl laptop:text-4xl font-[Poppins] font-bold homeText">
            <h2>OFTEN I USE</h2>
          </div>
          <Col md={5}>
            <div
              className={`mx-auto grid grid-cols-4  justify-center items-center text-center gap-4
              `}
            >
              {list.map((item, index) => (
                <AnimateScroll key={index} delay={index / 10}>
                  <span
                    class={`${item.class} shadow-xl h-[3.5rem] w-[3.5rem]  text-4xl  rounded-full flex items-center justify-center `}
                  >
                    {item.icon}
                  </span>
                </AnimateScroll>
              ))}
            </div>
          </Col>
          <Col className=""></Col>
        </Row>
      </Container>
      <div className="blurs"></div>
      <div className="blur2"></div>
      <div className="blur3"></div>
      <div className="blur4"></div>
    </div>
  );
};

export default Skils;
