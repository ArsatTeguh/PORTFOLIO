import React, { useCallback, useEffect, useRef } from "react";
import {
  AssetManagerPlugin,
  BloomPlugin,
  GBufferPlugin,
  GammaCorrectionPlugin,
  ProgressivePlugin,
  SSAOPlugin,
  SSRPlugin,
  TonemapPlugin,
  ViewerApp,
} from "webgi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { effect } from "./effect";
import { useMediaQuery } from "../lib/useReponsive";

gsap.registerPlugin(ScrollTrigger);

const Laptop = () => {
  const reffModels = useRef(null);
  const { matches } = useMediaQuery("(max-width: 500px)");
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

    const importer = manager.importer;
    importer.addEventListener("onProgress", (ev) => {
      const progressRatio = ev.loaded / ev.total;
      // console.log(progressRatio)
      document
        .querySelector(".progress")
        ?.setAttribute("style", `transform: scaleX(${progressRatio})`);
      document.body.style.overflowY = "hidden";
    });

    importer.addEventListener("onLoad", (ev) => {
      gsap.to(".loader", {
        x: "100%",
        duration: 0.8,
        ease: "power4.inOut",
        delay: 1,

        onComplete: () => {
          document.body.style.overflowY = "auto"; // Mengatur overflowY ke "auto" saat animasi selesai
        },
      });
    });

    viewer.renderer.refreshPipeline();

    await manager.addFromPath("/doll.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    if (matches) {
      position.set(2.64, 0.98, 9.87);
      target.set(0.1, 0.56, 0.51);
      camera.setCameraOptions({ fov: 33 });
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

    memoizeEffect(position, target, onUpdate, matches);
  }, [matches]);

  useEffect(() => {
    setupViewer();
  }, [matches]);

  return (
    <div id="webgi-canvas-container" className="models">
      <canvas id="webgi-canvas" ref={reffModels} />
    </div>
  );
};

export default Laptop;
