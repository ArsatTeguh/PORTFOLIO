import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import './footer.css';

const Footer = () => {
  return (
    <div className={`footer w-[90%]  mx-auto laptop:w-full bg-[#0d1117]`}>
      <div className="container footer-content">
        <Row md={2} xs={1} className="g-4">
          <Col>
            <div className={`info-footer flex flex-col gap-3`}>
              <h3 className={` text-[2rem] text-white font-bold  `}>
                Information Website
              </h3>
              <p
                className={`text-secondary paraf-project text-white text-justify  font-[300]`}
              >
                This Portfolio Web Application uses React Js Technology,
                Bootstrap, Framer Motion, Three js, Tailwind.
              </p>
            </div>
          </Col>
          <Col>
            <div className="contact-footer flex flex-col gap-3 laptop:items-center">
              <h3 className={`text-white font-bold text-[2rem]  `}>
                My Contact
              </h3>

              <div className="info-saya text-secondary flex  laptop:gap-4 gap-2 font-[Poppins] font-[300]">
                <p className="flex items-center gap-2 ">
                  <AiOutlineWhatsApp /> 0895-6371-16800
                </p>
                <p className="flex items-center gap-2">
                  <SiGmail /> arsatteguh@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <ImLocation2 /> Kota Medan
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="credit text-center mt-3 text-secondary font-[Poppins] font-[500]">
          <p className="text-[.7rem] laptop:text-[1rem]">
            Copyright© <a href="?">@arsatteguh</a> - 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
