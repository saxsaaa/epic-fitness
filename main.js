import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialize Swiper for testimonials
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// Preloader functionality
window.onload = function () {
  // Hide preloader once the page content is loaded
  document.getElementById("preloader").style.display = "none";

  // Start loader animation after the preloader is hidden
  startLoaderAnimation();
};

// Function to animate loader using GSAP
function startLoaderAnimation() {
  gsap.to(".bar", {
    duration: 2.5,
    height: 0,
    stagger: {
      amount: 0.8,
    },
    ease: "power4.inOut",
  });
}

// Reset preloader animation before page reload
window.addEventListener("beforeunload", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "block";
  window.scrollTo(0, 0); // Scroll to top when refreshed
  // Hide the preloader after a short delay
  setTimeout(function () {
    preloader.style.display = "none";
  }, 100);
});

// GSAP animation with ScrollTrigger
let tl = gsap.timeline({
  // scrollTrigger: {
  //   trigger: "box-area",
  //   start: "20% center",
  //   end: "top",
  //   scrub: true,
  //   markers: true,
  // },
});

tl.to(".hero-wrapper", {
  delay: 1.7,
  duration: 0.8,
  x: -1400,
});

tl.to(".box-wrapper", {
  delay: 0,
  duration: 0,
  x: 2000,
  stagger: 0.2,
});

// Smooth scrolling using Lenis library
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e); // Log scroll events
});

// RequestAnimationFrame for smooth scrolling
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
