import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./modal.css";
import { NavLink } from "react-bootstrap";
const containersAnimate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
const containersModal = {
  initial: { y: "-100vh", opacity: 0 },
  animate: { y: "0", opacity: 1, transition: { delay: 0.3 } },
};
const Modal = ({ modal, setModal, key }) => {
  const [go, setGo] = useState(false);

  const handle = () => {
    setGo(!go);
    setModal(!modal);
    console.log(key)
  };
  
  return (
    <>
    <AnimatePresence>
      {modal && (
        <motion.div
          variants={containersAnimate}
          initial="initial"
          animate="animate"
          className="backdrop"
        >
          <motion.div
            key='midals'
            className="contentModal"
            variants={containersModal}
            initial="initial"
            animate="animate"
            exit={{y: -100, opacity: 0}}
          >
            <motion.div
              className="exit"
              whileHover={{
                scale: 1.2,
              }}
            >
              <span onClick={() => setModal(false)}>X</span>
            </motion.div>
            <div className="content">
              <p>
                Kamu akan di alihkan ke github saya, <br /> terimakasih sudah
                singgah
              </p>
              <NavLink href="https://github.com/ArsatTeguh/MovieDb.git">
                <motion.button
                  onAuxClick={handle}
                  className="benar"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Ok
                </motion.button>
              </NavLink>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
