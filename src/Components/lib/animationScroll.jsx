import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export const AnimateScroll = ({ children, delay = 0.25 }) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: false });

  return (
    <motion.div
      style={{
        transform: isInview ? 'none' : 'translateY(50px)',
        opacity: isInview ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
