import React from "react";
import {Col,Row} from 'react-bootstrap'
import './footer.css'
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as ImIcons from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container footer-content">
        <Row>
          <Col>
          <div className="info-footer ">            <h3>Informasi Website</h3>
          <hr />
            <p className="text-secondary">Web Aplikasi Portfolio ini menggunakan Teknologi React.Js, Bootstrap, Framer Motion dan react-icons</p>
          </div>
          </Col>
          <Col>
          <div className="contact-footer">
            <h3>Contant Saya</h3>
            <hr />
           <div className="info-saya d-flex gap-lg-3  justify-content-center text-secondary">
           <span><AiIcons.AiOutlineWhatsApp/> 0895-6371-16800</span>
            <span><SiIcons.SiGmail/> arsatteguh@gmail.com</span>
            <span><ImIcons.ImLocation2/> Kota Medan</span>
           </div>
          </div>
          </Col>
        </Row>
        <div className="credit text-center text-secondary" >
       <p> Copyright© <a href="?">@arsatteguh</a> - 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;