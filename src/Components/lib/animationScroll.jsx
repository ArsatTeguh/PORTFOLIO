import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const AnimateScroll = ({ children, showIn = "kiri" }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 0.3,
        type: "spring",
        bounce: 0.5,
      },
    },
    hidden: { opacity: 0, x: showIn === "kiri" ? -100 : 100 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
};
