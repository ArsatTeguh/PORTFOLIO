import React from "react";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import { useStore } from "../../feature";
import "../responsive/skils/index.css";
import "./skil.css";

const Skil = () => {
  const [state] = useStore();

  return (
    <div className={`skil `}>
      <div className="container">
        <div className={`skil-content  : ""}`}>
          <div className={`skils `}>
            <p>My skill</p>
          </div>
          <div className={`icon-skil ${state.thema ? "dark-icon" : ""}`}>
            <span className={`html  : ""}`}>
              <AiIcons.AiFillHtml5 />
            </span>
            <span className={`css   : ""}`}>
              <DiIcons.DiCss3 />
            </span>
            <span className={`js   : ""}`}>
              <DiIcons.DiJavascript1 />
            </span>

            <span className={`react   : ""}`}>
              <DiIcons.DiReact />
            </span>
            <span className={`next   : ""}`}>
              <SiIcons.SiNextdotjs />
            </span>

            <span className={`node   : ""}`}>
              <DiIcons.DiNodejsSmall />
            </span>

            <span className={`github   : ""}`}>
              <AiIcons.AiFillGithub />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skil;
