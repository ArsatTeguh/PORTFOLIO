import { AnimatePresence } from "framer-motion";
import React, { memo } from "react";
import "../responsive/Project1/index.css";
import "./main1.css";

const Main1 = (props) => {
  const { title, des, link } = props;

  return (
    <AnimatePresence>
      <div className={`containers-main1 w-full h-full`}>
        <div className="flex flex-col gap-2">
          <span className="title gradient-text">{title}</span>
          <span className="des">{des}</span>
          <a href={link}>
            <button className="btn-project">Let's preview</button>
          </a>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default memo(Main1);
