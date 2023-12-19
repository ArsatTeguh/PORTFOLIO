import React from 'react';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AnimateScroll } from '../lib/animationScroll';

const MainHome = () => {
  return (
    <div
      className="repo  flex justify-start flex-col"
      style={{ paddingTop: '20px' }}
    >
      <AnimateScroll delay={0 / 10}>
        <div className="btn-pdf">
          <a href="/ATS.pdf" download>
            <span>Get Curriculum Vitae</span>
          </a>
        </div>
      </AnimateScroll>
      <div
        className=""
        style={{ display: 'flex', alignItems: 'center', gap: '30px' }}
      >
        <AnimateScroll delay={1 / 10}>
          <div className="flex items-center icons github">
            <span className="icon-info !text-3xl ">
              <AiFillGithub />
            </span>
          </div>
        </AnimateScroll>
        <AnimateScroll delay={2 / 10}>
          <div className="flex items-center icons linkedin">
            <span className="icon-info !text-3xl">
              <FaLinkedinIn />
            </span>
          </div>
        </AnimateScroll>
        <AnimateScroll delay={3 / 10}>
          <div className="flex items-center icons instagram">
            <span className="icon-info !text-3xl ">
              <AiFillInstagram />
            </span>
          </div>
        </AnimateScroll>
      </div>
    </div>
  );
};

export default MainHome;
