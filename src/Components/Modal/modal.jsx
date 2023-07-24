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
const Modal = ({ modal, setModal, to }) => {
  const [go, setGo] = useState(false);

  const handle = () => {
    setGo(!go);
    setModal(!modal);
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
              whilehover={{
                scale: 1.2,
              }}
            >
              <span onClick={() => setModal(false)}>X</span>
            </motion.div>
            <div className="content">
              <p>
                Kamu akan di alihkan ke mode demo, <br /> terimakasih sudah
                singgah
              </p>
              <NavLink href={to}>
                <motion.button
                  onAuxClick={handle}
                  className="benar"
                  whilehover={{
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
