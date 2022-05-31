import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";
import "../responsive/Navbar/index.css";
import panah from "../../assets/arrow.svg";
import * as AiIcons from "react-icons/ai";
import { motion } from "framer-motion";

//animate
const containersAnimate = {
  initial: {
    y: -300,
    scale: 1.2,
  },
  animate: {
    scale: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: "spring",
      ease: "anticipate",
      stiffness: 70,
    },
  },
};
const hoverIns = {
  whileHover: { scale: 1.2, color: "rgb(179, 9, 108)" },
};
const hoverFb = {
  whileHover: { scale: 1.2, color: "rgb(6, 65, 152)" },
};
const hoverGit = {
  whileHover: { scale: 1.2 },
};
const hoverMail = {
  whileHover: { scale: 1.2, color: "rgb(209, 132, 8)" },
};

const Navbars = () => {
  const [toggle, setToggle] = useState(false);

  const kondisiTogle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="containers-navbar">
      <Container>
        <div className="navbars">
          <div className="content-nav">
            <div className="nama">
              <p>PortFolio</p>
              {toggle ? (
                <motion.div
                  className="item-nav"
                  variants={containersAnimate}
                  initial="initial"
                  animate="animate"
                >
                  <motion.ul>
                    <motion.li variants={hoverIns} whileHover="whileHover">
                      <AiIcons.AiFillInstagram />
                    </motion.li>
                    <motion.li variants={hoverFb} whileHover="whileHover">
                      <AiIcons.AiFillFacebook />
                    </motion.li>
                    <motion.li variants={hoverGit} whileHover="whileHover">
                      <AiIcons.AiFillGithub />
                    </motion.li>
                    <motion.li variants={hoverMail} whileHover="whileHover">
                      <AiIcons.AiOutlineMail />
                    </motion.li>
                  </motion.ul>
                </motion.div>
              ) : (
                <div className="item-nav noActive"></div>
              )}
              {!toggle ? (
                <div className="logo-nav-up">
                  <img onClick={kondisiTogle} src={panah} alt="" />
                </div>
              ) : (
                <div className="logo-nav-down">
                  <img onClick={kondisiTogle} src={panah} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbars;
