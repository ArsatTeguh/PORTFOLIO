import { motion } from "framer-motion";
import React, { useState, Suspense } from "react";
import { useSwipeable } from "react-swipeable";
import { useMediaQuery } from "../lib/useReponsive";
import { Menu } from "./data";
import "./index.css";
import Main1 from "./main1";
const CanvasStars = React.lazy(() => import("./three/canvas"));

const MainIndex = () => {
  const [position, positionSet] = useState(1);
  const { matches } = useMediaQuery("(max-width: 500px)");

  const handleSwip = ({ dir }) => {
    if (dir === "Right") {
      if (position !== 0) {
        positionSet((prev) => prev - 1);
      }
    } else if (dir === "Left") {
      if (position !== Menu.length - 1) {
        positionSet((prev) => prev + 1);
      }
    }
  };

  const swipeHandlers = useSwipeable({
    onSwiped: handleSwip,
    onTouchStartOrOnMouseDown: ({ event }) => event.preventDefault(),
    touchEventOptions: { passive: false },
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  return (
    <div className="w-full h-full relative">
      <span className="text-4xl font-[700] laptop:top-[5%]  hp:top-[18%] font-[Poppins] text-transparent gradient-text absolute w-full text-center ">
        PROJECTS
      </span>
      <div className="slider h-full w-full Apps">
        <div className="content-slider realative w-full h-full">
          <div className="absolute h-full w-full ">
            <Suspense fallback={null}>
              <CanvasStars jarak={position} />
            </Suspense>
          </div>
          <div className="laptop:container mx-auto list-slider flex items-center">
            <motion.div className="Apps">
              <div className="rows w-full " {...swipeHandlers}>
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
                        ? `${(index - position) * 50 - 0}vw`
                        : `${(index - position) * 50 - -5}vw`,

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
