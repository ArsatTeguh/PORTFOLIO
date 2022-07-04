import React, {useState} from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import { imagesDs } from "./fileimg";
import '../responsive/project3/index.css'
import './main3.css'
import Modal from '../Modal/modal';
import {motion} from 'framer-motion'
import git from '../../assets/github.png'

const Main3 = () => {
  const [modal, setModal] = useState(false);
  return (

      <div className="containers-main3">
        <Container >
          <Row lg="2" md="2" xs="1" >
            <Col>
              <div className="txtprojext3">
                <h2>Dashboard</h2>
                <p>
                  Web Aplikasi dibuat menggunakan teknologi ReactJs sebagian intraksi sudah di selesaikan,
                  seperti Panigation, Add data dan berpindah pages. Menerapkan state Management React Context dan menggunakan data Api open source dan mengkonsumsikan dengan axios serta component modal megguunakan framer motion.
                </p>
                
                <div className="git">
                <motion.img onClick={() => setModal(true)}  src={git} alt="" 
              whileHover={{scale:1.2}}
              />
              </div>
             
             
              </div>
              {modal && <Modal modal={modal} setModal={setModal} to={'https://arsatteguh.github.io/dashboard/'} />}
            </Col>
            <Col>
              <div className="galery justify-content-center">
                {imagesDs.map((data, index) => {
                  return (
                    <div key={index} className="img-content-header">
                      <img src={data} alt="" />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  
  )
}

export default Main3