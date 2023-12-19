import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './person.css';

const Person = () => {
  return (
    <div
      className="triger "
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row>
          <Col></Col>
          <Col md={7}>
            <div className="person">
              <div className="image">
                <img src="/teguh.png" alt="profil" />
              </div>
              <div className="deskripsi">
                <p>
                  <q>
                    Hello, my name is Arsat, currently I live in the city of
                    Medan, Indonesia. I am a website developer that focuses on
                    Front end developers using React Js and Next Js technology.
                  </q>
                </p>
              </div>
              <motion.div
                className="btn-person"
                animate={{
                  y: [0, -20], // Menggeser dari -100 ke 0
                }}
                transition={{
                  duration: 2, // Durasi animasi pergeseran
                  repeat: Infinity, // Mengulang tak terbatas
                  repeatType: 'reverse', // Mengubah arah pergeseran saat mengulang
                }}
              >
                <span className="font-semibold font-[Poppins]">
                  Web Developer
                </span>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="blur-main"></div>
      <div className="blur2-main"></div>
    </div>
    //0823-8430-3652
  );
};

export default Person;
