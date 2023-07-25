import React, { memo, useCallback, useEffect, useRef, useState } from "react";
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
  mobileAndTabletCheck,
} from "webgi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { effect } from "./effect";

gsap.registerPlugin(ScrollTrigger);

const Laptop = () => {
  const reffModels = useRef(null);

  const memoizeEffect = useCallback((position, target, onUpdate, isMobile) => {
    if (position && target && onUpdate) {
      effect(position, target, onUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: reffModels.current,
    });
    const isMobile = mobileAndTabletCheck();
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
    });

    importer.addEventListener("onLoad", (ev) => {
      gsap.to(".loader", {
        x: "100%",
        duration: 0.8,
        ease: "power4.inOut",
        delay: 1,
        onComplete: () => {
          document.body.style.overflowY = "auto";
          lenis.start();
        },
      });
    });

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
