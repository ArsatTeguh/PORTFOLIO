import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import * as random from "maath/random/dist/maath-random.esm";
import { memo, useEffect, useRef, useState } from "react";

const Stars = (props) => {
  const { jarak } = props;
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2000), { radius: 1.2 })
  );

  const cameraPositionx = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useFrame((state) => {
    state.camera.position.x = cameraPositionx.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  useEffect(() => {
    animate(cameraPositionx, 0);
    animate(
      cameraLookAtX,
      jarak === 0
        ? 0
        : jarak === 1
        ? -0.2
        : jarak === 2
        ? 0.2
        : jarak === 3
        ? 0.4
        : -0.2
    );
  }, [jarak]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default memo(Stars);
