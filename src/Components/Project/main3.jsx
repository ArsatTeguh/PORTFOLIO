import React, {useState} from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import { imagesDs } from "./fileimg";
import '../responsive/project3/index.css'
import './main3.css'
import Modal from '../Modal/modal';
import {motion} from 'framer-motion'
import git from '../../assets/github.png'
import { useStore } from '../../feature';

const Main3 = () => {
  const [modal, setModal] = useState(false);
  const [state] = useStore()
  return (

      <div className={`containers-main3 ${state.thema ? 'mode-dark' : ''}`}>
        <Container >
          <Row lg="2" md="2" xs="1" >
            <Col>
              <div className="txtprojext3">
                <h2 className={`  ${state.thema ? 'mode-dark' : ''}`}>Dashboard</h2>
                <p className={`  ${state.thema ? 'mode-dark' : ''}`}>
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
                    <div key={index} className={`img-content-header   ${state.thema ? 'mode-dark' : ''}`}>
                      <img src={data} alt="" />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="blur-main3"></div>
        <div className="blur1-main3"></div>
      </div>
  
  )
}

export default Main3