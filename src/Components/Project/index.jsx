import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Menu } from "./data";
import { motion } from "framer-motion";
import "./index.css";
import Main1 from "./main1";
import CanvasStars from "./three/canvas";
const MainIndex = () => {
  const [position, positionSet] = useState(1);

  const handleRight = () => {
    if (position !== Menu.length - 1) {
      positionSet((prev) => prev + 1);
    }
  };

  const handleLeft = () => {
    if (position !== 0) {
      positionSet((prev) => prev - 1);
    }
  };
  return (
    <div className="w-full h-full relative">
      <span className="text-4xl font-[700] laptop:top-[5%]  hp:top-[18%] font-[Poppins] text-transparent gradient-text absolute w-full text-center ">
        PROJECTS
      </span>
      <div className="slider h-full w-full Apps">
        <div className="content-slider realative w-full h-full">
          <div className="absolute h-full w-full ">
            <CanvasStars jarak={position} />
          </div>
          <div className="laptop:container mx-auto list-slider h-full flex items-center">
            <motion.div className="Apps">
              <div className="navigations flex justify-between top-[1rem]  w-full h-full items-center ">
                <button
                  className=" flex items-center justify-center w-[2.5rem] z-20 h-[2.5rem] bg-white  rounded-full shadow-xl "
                  onClick={handleLeft}
                >
                  <span className="text-xl text-black">
                    <AiIcons.AiOutlineArrowLeft />
                  </span>
                </button>

                <button
                  className="flex items-center z-20  justify-center w-[2.5rem] h-[2.5rem] bg-white font-semibold rounded-full shadow-xl  "
                  onClick={handleRight}
                >
                  <span className="text-xl text-black">
                    <AiIcons.AiOutlineArrowRight />
                  </span>
                </button>
              </div>
              <div className="rows w-full ">
                {Menu?.map((item, index) => (
                  <motion.div
                    className={`containerss  cursor-pointer flex items-center justify-center z-10 ${
                      index !== position && "blur-[3px] z-0 redup"
                    }`}
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{
                      rotate: 0,
                      left: `${(index - position) * 50 - -5}vw`,

                      scale: index === position ? 1 : 0.8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div
                      className=""
                      onClick={() => onHandle(index, item.title)}
                    >
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
