import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const MainHome = () => {
  return (
    <div className="repo" style={{ paddingTop: "20px" }}>
      <div className="btn-pdf">
        <a href="/ATS.pdf" download>
          <span>Get Curriculum Vitae</span>
        </a>
      </div>
      <div
        className=""
        style={{ display: "flex", alignItems: "center", gap: "30px" }}
      >
        <div className="flex items-center icons github">
          <span className="icon-info !text-3xl ">
            <AiFillGithub />
          </span>
        </div>
        <div className="flex items-center icons linkedin">
          <span className="icon-info !text-3xl">
            <FaLinkedinIn />
          </span>
        </div>
        <div className="flex items-center icons instagram">
          <span className="icon-info !text-3xl ">
            <AiFillInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
