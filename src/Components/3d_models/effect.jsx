import gsap from 'gsap';
export const effect = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: -6.2854147502,
    y: 8.1664493286,
    z: -2.9042130928,
    scrollTrigger: {
      trigger: '.triger',
      start: 'top bottom',
      end: 'top top',
      scrub: 1,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: -1.1236240323,
      y: -1.0624153378,
      z: 1.2738242994,
      scrollTrigger: {
        trigger: '.triger',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
        immediateRender: false,
      },
    })
    .to(position, {
      x: 4.07,
      y: 4.66,
      z: 9.79,
      scrollTrigger: {
        trigger: '.project',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -1.56,
      y: -0.97,
      z: 1.69,
      scrollTrigger: {
        trigger: '.project',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
        immediateRender: false,
      },
    })
    .to('.models', {
      opacity: '0',
      scrollTrigger: {
        trigger: '.end-scroll',
        start: 'top bottom',
        end: 'top top',
        scrub: 2,
        immediateRender: false,
      },
    });
  // .to('.models', {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: '.end-scroll',
  //     start: 'top bottom',
  //     end: 'top top',
  //     scrub: 1,
  //     immediateRender: false,
  //   },
  // })
  // .to('.triger', {
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: '.end-scroll',
  //     start: 'top bottom',
  //     end: 'top top',
  //     scrub: 1,
  //     immediateRender: false,
  //   },
  // });
};
