let toc = gsap.timeline({
  scrollTrigger: {
    trigger: '.table-of-contents',
    start: 'top 10%', // start when center of our trigger element reaches %fromTop of viewport
    // markers: true,
    endTrigger: '.grid-right',
    end: "bottom 50%",
    pin: true
  }
});

let progressA = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-a',
    start: 'top 50%',
    // markers: true,
    endTrigger: '.section-a',
    end: "bottom 30%",
    // toggleClass: "toc-selected", // put on the right selector if needed
    scrub: 0.5
  }
});

progressA.from('.progress-a', { x: -320 });

let progressB = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-b',
    start: 'top 50%',
    // markers: true,
    endTrigger: '.section-b',
    end: "bottom 30%",
    scrub: 0.5
  }
});

progressB.from('.progress-b', { x: -320 });

let progressC = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-c',
    start: 'top 50%',
    // markers: true,
    endTrigger: '.section-c',
    end: "bottom 30%",
    scrub: 0.5
  }
});

progressC.from('.progress-c', { x: -320 });

let progressD = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-d',
    start: 'top 50%',
    // markers: true,
    endTrigger: '.section-d',
    end: "bottom 30%",
    scrub: 0.5
  }
});

progressD.from('.progress-d', { x: -320 });