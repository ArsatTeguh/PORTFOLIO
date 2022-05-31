import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import foto from "../../assets/Foto.jpg";
import "./Profil.css";
import "../responsive/Profil/index.css";
import * as FiIcons from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { data } from "./profilData";
import Pendidikan from "./Page/pendidikan";
import Pelatihan from "./Page/pelatihan";
import Experience from "./Page/experience";
import Person from "./Page/person";

//animate
const containersAnimate = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const Profil = () => {
  const [page, setPage] = useState(false);

  return (
    <>
      <Container>
        <div className="contentProfils">
          <div className="burger">
            <div className={`contentNavigasi ${page ? "slide" : null}`}>
              <div className="contentProfil">
                <span onClick={() => setPage(!page)} className="iconPage">
                  <FiIcons.FiLogIn />
                </span>
                <img src={foto} alt="" />
                <p className="name">Arsat Teguh Maulana</p>
              </div>
              <motion.div
                className="contentIcon"
                variants={containersAnimate}
                initial="initial"
                animate="animate"
              >
                <ul>
                  {data.map((data, index) => {
                    return (
                      <li
                        onClick={() => setPage(data.name)}
                        className={data.className}
                        key={index}
                      >
                        <div
                          className="iconText"
                          whileHover={{ scale: 1.2, x: 0, y: 0 }}
                        >
                          <span>{data.icon}</span>
                          <span className="namaicon">{data.name}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
          <div className="contentInfo">
            {page === "Pendidikan" && (
              <motion.div
                className="pendidikan"
                variants={containersAnimate}
                initial="initial"
                animate="animate"
              >
                <Pendidikan />
              </motion.div>
            )}
            {page === "Pelatihan" && (
              <motion.div
                variants={containersAnimate}
                initial="initial"
                animate="animate"
              >
                <Pelatihan />
              </motion.div>
            )}
            {page === "Experience" && (
              <motion.div
                variants={containersAnimate}
                initial="initial"
                animate="animate"
              >
                <Experience />
              </motion.div>
            )}
            {page === "Person" && (
              <motion.div
                variants={containersAnimate}
                initial="initial"
                animate="animate"
              >
                <Person />
              </motion.div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profil;
