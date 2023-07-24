import React from "react";
import "./person.css";
import { Col, Container, Row } from "react-bootstrap";
const Person = () => {
  return (
    <div
      className="triger"
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row>
          <Col></Col>
          <Col md={8}>
            <div className="person">
              <div className="img-profil">
                <img
                  src="https://media.licdn.com/dms/image/C5603AQF9I3i9cvhJ9Q/profile-displayphoto-shrink_800_800/0/1661528967224?e=1695254400&v=beta&t=2cT6Uxz0SBnA9LoM8LqtC0ELRItnchjKxZgo_tKAuRo"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
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
            </div>
          </Col>
        </Row>
      </Container>
      <div className="blur-main"></div>
      <div className="blur2-main"></div>
    </div>
  );
};

export default Person;
