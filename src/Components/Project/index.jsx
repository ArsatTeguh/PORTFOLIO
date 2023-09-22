import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "../lib/useReponsive";
import { Menu } from "./data";
import "./index.css";
import Main1 from "./main1";
import CanvasStars from "./three/canvas";

const MainIndex = () => {
  const [position, positionSet] = useState(1);
  const { matches } = useMediaQuery("(max-width: 500px)");

  const right = () => {
    if (position !== 0) {
      positionSet((prev) => prev - 1);
    }
  };
  const left = () => {
    if (position !== Menu.length - 1) {
      positionSet((prev) => prev + 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: left,
    onSwipedRight: right,
    onTouchStartOrOnMouseDown: ({ event }) => event.preventDefault(),
    touchEventOptions: { passive: matches ? true : false },
    preventScrollOnSwipe: false,
    trackMouse: matches ? false : true,
  });

  return (
    <div className="w-full h-full relative">
      <span
        className={`text-4xl font-[700] laptop:top-[5%]  hp:top-[18%] font-[Poppins] absolute w-full text-center ${
          matches ? "text-white" : "gradient-text !text-transparent "
        }`}
      >
        PROJECTS
      </span>
      <div className="slider h-full w-full Apps">
        <div className="content-slider realative w-full h-full">
          <div className="absolute h-full w-full  ">
            <CanvasStars jarak={position} />
          </div>
          <div className="laptop:container mx-auto list-slider w-full flex items-center">
            <motion.div className="Apps ">
              <div className="rows w-full  " {...swipeHandlers}>
                {Menu?.map((item, index) => (
                  <motion.div
                    className={`containerss  cursor-pointer flex items-center justify-center z-10 ${
                      index !== position && "blur-[3px] z-0 redup"
                    }`}
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{
                      rotate: 0,
                      left: matches
                        ? `${(index - position) * 90 - -10}vw`
                        : `${(index - position) * 45 - -35}vw`,

                      scale: index === position ? 1 : 0.8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div className="">
                      <Main1 {...item} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIndex;
