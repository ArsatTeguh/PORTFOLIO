import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, memo } from "react";
import Stars from "./stars";

const CanvasStars = ({ jarak }) => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars jarak={jarak} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default memo(CanvasStars);
