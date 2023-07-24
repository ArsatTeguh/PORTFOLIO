import React from "react";
import * as AicIcons from "react-icons/ai";
import ButtonOuline from "../lib/button";
const MainHome = () => {
  return (
    <div className="repo" style={{ paddingTop: "30px" }}>
      <div style={{ paddingBottom: "25px" }}>
        <ButtonOuline>Let's to Repository</ButtonOuline>
      </div>
      <div
        className=""
        style={{ display: "flex", alignItems: "center", gap: "30px" }}
      >
        <div className="flex items-center">
          <span className="icon-info !text-3xl ">
            <AicIcons.AiFillGithub />
          </span>
          <span>
            <span
              className="font-info !text-xl items-center "
              style={{ paddingLeft: "8px" }}
            >
              10+{" "}
            </span>{" "}
            Repository
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
