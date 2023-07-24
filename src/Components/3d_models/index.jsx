import React, {
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useState,
  memo,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { effect } from "./effect";

gsap.registerPlugin(ScrollTrigger);

const Laptop = () => {
  const [isMobile, setIsMobile] = useState(null);
  const reffModels = useRef(null);

  const memoizeEffect = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) {
      effect(position, target, onUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: reffModels.current,
    });
    // Add some plugins
    const mobile = mobileAndTabletCheck();
    setIsMobile(mobile);
    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();

    await manager.addFromPath("/doll.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    if (isMobile) {
      position.set(2.06, 2.04, 11.02);
      target.set(-0.08, 0.75, 0.01);
      camera.setCameraOptions({ fov: 30 });
    }

    window.scrollTo(0, 0);

    let needUpdate = true;
    const onUpdate = () => {
      needUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needUpdate) {
        camera.positionTargetUpdated(true);
        needUpdate = false;
      }
    });

    memoizeEffect(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div id="webgi-canvas-container" className="models">
      <canvas id="webgi-canvas" ref={reffModels} />
    </div>
  );
};

export default memo(Laptop);
