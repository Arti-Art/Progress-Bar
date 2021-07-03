gsap.registerPlugin(ScrollTrigger);

// SMALL <1000px
ScrollTrigger.matchMedia({
  "(max-width: 999px)": function () {
    console.log("screen width <1000px");
    let tocSmall = gsap.timeline({
      scrollTrigger: {
        trigger: '.table-of-contents',
        start: 'top 2%', // start when top of our trigger element reaches %fromTop of viewport
        // markers: true,
        endTrigger: '.grid-right',
        end: "bottom 5%",
        pin: true
      }
    });
    // Reveal only .progli-a
    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-a',
        start: 'top 50%',
        endTrigger: '.section-a',
        end: "bottom 30%",
        toggleClass: {targets: ".progli-b, .progli-c, .progli-d", className: "d-none"},
        toggleClass: {targets: ".table-of-contents", className: "d-block"},
      }
    });
    // Reveal only .progli-b
    let progressB = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-b',
        start: 'top 50%',
        endTrigger: '.section-b',
        end: "bottom 30%",
        toggleClass: {targets: ".progli-a, .progli-c, .progli-d", className: "d-none"},
      }
    });
    // Reveal only .progli-c
    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-c',
        start: 'top 50%',
        endTrigger: '.section-c',
        end: "bottom 30%",
        toggleClass: {targets: ".progli-a, .progli-b, .progli-d", className: "d-none"},
      }
    })
    // Reveal only .progli-d
    gsap.timeline({
      scrollTrigger: {
        trigger: '.section-d',
        start: 'top 50%',
        endTrigger: '.section-d',
        end: "bottom 30%",
        toggleClass: {targets: ".progli-a, .progli-b, .progli-c", className: "d-none"},
      }
    })

  }
})

ScrollTrigger.matchMedia({
  "(min-width: 1000px)": function () {
    console.log("screen width >=1000px");
    let toc = gsap.timeline({
      scrollTrigger: {
        trigger: '.table-of-contents',
        start: 'top 10%',
        endTrigger: '.grid-right',
        end: "bottom 50%",
        pin: true
      }
    });
  }
})

let progressA = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-a',
    start: 'top 50%',
    markers: true,
    endTrigger: '.section-a',
    end: "bottom 30%",
    // onEnter: () => {console.log("onEnter triggered")},
    // onLeave: () => {console.log("onLeave triggered")},
    // onEnterBack: () => {console.log("onEnterBack triggered")},
    // onLeaveBack: () => {console.log("onLeaveBack triggered")},
    // onUpdate: (self) => { console.log("onUpdate", self.progress.toFixed(3))},
    // toggleClass: "toc-selected",
    // toggleClass: {targets: ".progli-a", className: "d-block"},
    scrub: 0.5
  }
});
progressA.from('.progress-a', { xPercent: -100 });

let progressB = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-b',
    start: 'top 50%',
    markers: true,
    endTrigger: '.section-b',
    end: "bottom 30%",
    scrub: 0.5
  }
});
progressB.from('.progress-b', { xPercent: -100 });

let progressC = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-c',
    start: 'top 50%',
    markers: true,
    endTrigger: '.section-c',
    end: "bottom 30%",
    scrub: 0.5
  }
});
progressC.from('.progress-c', { xPercent: -100 });

let progressD = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-d',
    start: 'top 50%',
    markers: true,
    endTrigger: '.section-d',
    end: "bottom 30%",
    scrub: 0.5
  }
});
progressD.from('.progress-d', { xPercent: -100 });