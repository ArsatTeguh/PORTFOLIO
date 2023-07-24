import React from "react";
import { Col, Row } from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import * as SiIcons from "react-icons/si";
import "./footer.css";

const Footer = () => {
  return (
    <div className={`footer w-[90%] mx-auto laptop:w-full`}>
      <div className="container footer-content">
        <Row md={2} xs={1} className="g-4">
          <Col>
            <div className={`info-footer flex flex-col gap-3    `}>
              {" "}
              <h3 className={` text-[2rem] gradient-text font-bold  `}>
                Information Website
              </h3>
              <p
                className={`text-secondary text-white font-[Poppins] font-[300]`}
              >
                Web Aplikasi Portfolio ini menggunakan Teknologi React.Js,
                Bootstrap, Framer Motion dan react-icons
              </p>
            </div>
          </Col>
          <Col>
            <div className="contact-footer flex flex-col gap-3 laptop:items-center">
              <h3 className={`gradient-text font-bold text-[2rem]  `}>
                My Contact
              </h3>

              <div className="info-saya text-secondary flex  laptop:gap-4 gap-2 font-[Poppins] font-[300]">
                <span className="flex items-center gap-2">
                  <AiIcons.AiOutlineWhatsApp /> 0895-6371-16800
                </span>
                <span className="flex items-center gap-2">
                  <SiIcons.SiGmail /> arsatteguh@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <ImIcons.ImLocation2 /> Kota Medan
                </span>
              </div>
            </div>
          </Col>
        </Row>
        <div className="credit text-center pt-10 text-secondary font-[Poppins] font-[500]">
          <p className="text-[.7rem] laptop:text-[1rem]">
            Copyright© <a href="?">@arsatteguh</a> - 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
