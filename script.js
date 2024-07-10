if (window.innerWidth > 768) {
gsap.registerPlugin(ScrollTrigger);
gsap.from(".text-2",{
    opacity:0,
  duration:1,
  x:600,
  scrollTrigger:{
    trigger:".text-2",
    scroller:"body",
    start:"100px 100%",
    end:"25%",
    scrub:1
}
}) 
gsap.from(".link_row",{
    opacity:0,
  duration:2,
  x:900,
  scrollTrigger:{
    trigger:".link_row",
    scroller:"body",
    start:"-900px 100%",
    end:"bottom 100px",
    scrub:1
}
}) 

gsap.from(".text-4",{
    opacity:0,
  duration:2,
  x:900,
  scrollTrigger:{
    trigger:".text-4",
    scroller:"body",
    start:"-900px 100%",
    end:"bottom 100px",
    scrub:1
}
}) 
}
gsap.fromTo(
  ".fullscreen",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);


