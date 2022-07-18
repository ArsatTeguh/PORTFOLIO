import React from "react";
import {Col,Row} from 'react-bootstrap'
import './footer.css'
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as ImIcons from "react-icons/im";
import { useStore } from "../../feature";

const Footer = () => {
  const [state] = useStore()
  return (
    <div className={`footer   ${state.thema ? 'mode-dark' : ''}`}>
      <div className="container footer-content">
        <Row>
          <Col>
          <div className={`info-footer   ${state.thema ? 'mode-dark' : ''} `}>            <h3 className={`  ${state.thema ? 'mode-dark' : ''}`}>Informasi Website</h3>
          <hr />
            <p className={`text-secondary`}>Web Aplikasi Portfolio ini menggunakan Teknologi React.Js, Bootstrap, Framer Motion dan react-icons</p>
          </div>
          </Col>
          <Col>
          <div className="contact-footer">
            <h3 className={`  ${state.thema ? 'mode-dark' : ''}`}>Contant Saya</h3>
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
      <div className="blur"></div>
      <div className="blur2"></div>
      <div className="blur3"></div>
      <div className="blur4"></div>
    </div>
  )
}

export default Footer;