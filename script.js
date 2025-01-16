// Locomotive
function loco(){
    gsap.registerPlugin(ScrollTrigger);
 
 // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
 
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true
 });
 // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
 locoScroll.on("scroll", ScrollTrigger.update);
 
 // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
 ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
     return arguments.length
       ? locoScroll.scrollTo(value, 0, 0)
       : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
     return {
       top: 0,
       left: 0,
       width: window.innerWidth,
       height: window.innerHeight
     };
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#main").style.transform
     ? "transform"
     : "fixed"
 });
 
 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 
 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();
 }
loco();



let circle = document.querySelector(".moveCircle");
document.addEventListener("mousemove",(dets)=>{
    gsap.to(circle,{
        left : dets.x,
        top:dets.y
    })
})

function videoWalaAnim(){
    let video = document.querySelector("#vid-container");
    let play = document.querySelector("#play");
    video.addEventListener("mouseenter",()=>{
    gsap.to(play,{
        opacity:1,
        scale:1
    })
})
video.addEventListener("mouseleave",()=>{
    gsap.to(play,{
        opacity:0,
        scale:0
    })
})

video.addEventListener("mousemove",(dets)=>{
    let y = dets.y - video.getBoundingClientRect().top - 40;
    let x = dets.x - video.getBoundingClientRect().left - 50;
    gsap.to(play,{
        left:x,
        top:y
    })
})
}
videoWalaAnim();
gsap.from("#page-1 h1",{
    y:300,
    opacity:0,
    stagger:0.3,
    duration:0.9
})

// Pantry Box Anim
gsap.to(".p2-box",{
    y:150,
    duration:0.8,
    scrollTrigger:{
        scroller:"#main",
        trigger:".p2-box",
        scrub:1
    }
})



document.querySelector("#page-4").addEventListener("mouseenter",(dets)=>{
    gsap.to(circle,{
        opacity:1,
        scale:1
    })
})
document.querySelector("#page-4").addEventListener("mouseleave",(dets)=>{
    gsap.to(circle,{
        opacity:0,
        scale:0
    })
})

document.querySelector("#sr-2").addEventListener("mouseenter",()=>{
    gsap.to(circle,{
        backgroundColor : "#b4d5b6"
    })
})
document.querySelector("#sr-2").addEventListener("mouseleave",()=>{
    gsap.to(circle,{
        backgroundColor : "rgb(253, 158, 148)"
    })
})

gsap.to("#page-5",{
    backgroundColor:"black",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page-5",
        start:"top 80%",
        end: "top 10%",
        scrub:1
        
    }
})



