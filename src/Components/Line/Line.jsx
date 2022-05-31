import React from "react";
import { Container } from "react-bootstrap";
import { animate, motion } from "framer-motion";
import "./Line.css";
import '../responsive/Line/index.css'


const containeranimate = {
  initial: {
    height: 8
  },
  animate: {
    height: 187,
    transition: {
      delay: 6.5,
      duration: 2,
      type: "spring",
      stiffness: 150,
      when:"beforeChildren"
    },
  }
}

const containeranimate2 = {
  initial: {
    height: 8
  },
  animate: {
    height: 187,
    transition: {
      delay: 6.5,
      duration: 2,
      type: "spring",
      stiffness: 150,
      when:"beforeChildren"
    },
  }
}

const child = {
  initial:{
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition : {
      delay: 0.5,
      duration:0.2
    }
  }
}

const Line = () => {
  return (
    <div className="containers-lines">
      <Container>
        <div className="container-line">
          <motion.div
            className="line1"
            variants={containeranimate}
            initial='initial'
            animate='animate'
          >
            <motion.h2
            variants={child}
            >About Me</motion.h2>
          </motion.div>

          <motion.div className="line2"
            variants={containeranimate2}
            initial='initial'
            animate='animate'
          >
            <motion.p
            variants={child}
            >
              Saya seorang Freshgraduate dan beberapa waktu lalu saya telah
              menyelesaikan pelatihan Digital Talent Kominfo dengan Dicoding
              sebagai vendornya. Pelatatihan tersebut berlangsung selama 2 bulan
              dan bertemakan BackEnd Developer NodeJs 2022.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Line;
