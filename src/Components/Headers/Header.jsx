import React from "react";
import "./Header.css";
import "../responsive/Headers/index.css";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <>
      <div className="intro-overlay">
        <div className="top">
          <motion.div
            className="overlay-top1"
            initial={{ y: 0}}
            animate={{
              y: -1500,
              transition: {
                delay: 3,
                duration: 3,
                type: "spring",
              },
            }}
          ></motion.div>
          <motion.div
            className="overlay-top2"
            initial={{ y: 0}}
            animate={{
              y: -1500,
              transition: {
                delay: 3.5,
                duration: 3,
                type: "spring",
              },
            }}
          ></motion.div>
          <motion.div
            className="overlay-top3"
            initial={{ y: 0 }}
            animate={{
              y: -1500,
              transition: {
                delay: 4,
                duration: 3,
                type: "spring",
              },
            }}
          ></motion.div>
        </div>
        <div className="bottom">
          <motion.div
            className="overlay-bottom1"
            initial={{ y: 0 }}
            animate={{
              opacity: 0,
              y: 1500,
              transition: {
                delay: 4.5,
                duration: 3,
                type: "spring",
              },
            }}
          ></motion.div>
          <motion.div
            className="overlay-bottom2"
            initial={{ y: 0 }}
            animate={{
              y: 1500,
              opacity: 0,
              transition: {
                delay: 5,
                duration: 3,
                type: "spring",
              },
            }}
          ></motion.div>
          <motion.div
            className="overlay-bottom3"
            initial={{ y: 0 }}
            animate={{
              y: 1500,
              opacity: 0,
              transition: {
                delay: 5.5,
                duration: 3,
                type: "spring",
              },
            }}
          ></motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
