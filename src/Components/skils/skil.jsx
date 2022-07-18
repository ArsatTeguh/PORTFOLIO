import React from "react";
import * as AiIcons from "react-icons/ai";
import * as DiIcons from "react-icons/di";
import * as SiIcons from "react-icons/si";
import { useStore } from "../../feature";
import '../responsive/skils/index.css'
import './skil.css'

const Skil = () => {
  const [state] = useStore()

  return (
    <div className={`skil ${state.thema ? 'mode-dark': ''}`}>
      <div className="container">
       <div className={`skil-content ${state.thema ? 'dark-skill' : ''}`}>
       <div className={`skils  ${state.thema} ? 'dark-teks' : ''}`}>
          <p  className={`${state.thema} ? 'dark-teks' : ''}`}>My skill</p>
        </div>
        <div className={`icon-skil ${state.thema ? 'dark-icon' : ''}`}>
          <span className={`html ${state.thema ? 'dark-skill' : ''}`}>
            <AiIcons.AiFillHtml5 />
          </span>
          <span className={`css  ${state.thema ? 'dark-skill' : ''}`}>
            <DiIcons.DiCss3 />
          </span>
          <span className={`js  ${state.thema ? 'dark-skill' : ''}`}>
            <DiIcons.DiJavascript1 />
          </span>

          <span className={`react  ${state.thema ? 'dark-skill' : ''}`}>
            <DiIcons.DiReact />
          </span>
          <span className={`next  ${state.thema ? 'dark-skill' : ''}`}>
            <SiIcons.SiNextdotjs />
          </span>

          <span className={`node  ${state.thema ? 'dark-skill' : ''}`}>
            <DiIcons.DiNodejsSmall />
          </span>

          <span className={`github  ${state.thema ? 'dark-skill' : ''}`}>
            <AiIcons.AiFillGithub />
          </span>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Skil;
