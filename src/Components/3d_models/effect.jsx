import gsap from "gsap";
export const effect = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: -6.73,
    y: 8.25,
    z: -4.78,
    scrollTrigger: {
      trigger: ".triger",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: -1.59,
      y: 0.35,
      z: 1.16,
      scrollTrigger: {
        trigger: ".triger",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".home", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".triger",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".models", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".end-scroll",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
    .to(".triger", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".end-scroll",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
};
