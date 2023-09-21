import React, { memo, useEffect, useRef } from "react";
import { Setup } from "./setup";
import { useMediaQuery } from "../lib/useReponsive";

const Laptop = () => {
  const reffModels = useRef(null);
  const { matches } = useMediaQuery("(max-width: 500px)");
  const setupViewer = Setup({ matches, reffModels });

  useEffect(() => {
    setupViewer();
  }, [matches]);

  return (
    <div id="webgi-canvas-container" className="models">
      <canvas id="webgi-canvas" ref={reffModels} />
    </div>
  );
};

export default memo(Laptop);
