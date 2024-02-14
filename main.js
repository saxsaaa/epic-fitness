// Import GSAP and ScrollTrigger
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

// Hero section animation
gsap.to(".hero-wrapper", {
  delay: 1.7,
  duration: 0.8,
  x: -1400,
});

// Box wrapper animation with ScrollTrigger
gsap.to(".box-wrapper", {
  delay: 0,
  duration: 1,
  x: 2000,
  stagger: 1,
  scrollTrigger: {
    trigger: ".box-wrapper",
    markers: false,
    start: "top 100%",
    end: "top 85%",
    scrub: true,
  },
});

// About section animation with ScrollTrigger
gsap.to(".about-animation", {
  visibility: "visible",
  delay: 0,
  duration: 5,
  y: 0,
  stagger: 4,
  scrollTrigger: {
    trigger: ".about-animation",
    markers: false,
    start: "-600px 100%",
    end: "top 70%",
    scrub: true,
  },
});

// Function to create ScrollTrigger dynamically based on screen size
const aboutSection = document.querySelector(".about-section");
let scrollTriggerInstance;

function createScrollTrigger() {
  if (window.matchMedia("(max-width: 47em)").matches) {
    // Apply ScrollTrigger with pinning for smaller screens
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill(); // Remove existing instance if it exists
    }
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: aboutSection,
      start: "top -800px",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      markers: false,
    });
  } else {
    // Apply ScrollTrigger with pinning for larger screens
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill(); // Remove existing instance if it exists
    }
    scrollTriggerInstance = ScrollTrigger.create({
      trigger: aboutSection,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      markers: false,
    });
  }
}

// Call the function initially
createScrollTrigger();

// Add event listener for screen size changes to update ScrollTrigger
window.addEventListener("resize", createScrollTrigger);

// Box wrapper animation with ScrollTrigger
gsap.to(".class-item", {
  visibility: "visible",
  delay: 0,
  duration: 2,
  left: 0,

  scrollTrigger: {
    trigger: ".class-item",
    markers: false,
    start: "top 100%",
    end: "bottom 100%",
    scrub: true,
  },
});
gsap.to(".testimonial-wrapper", {
  visibility: "visible",
  delay: 0,
  duration: 1,
  x: 0,

  scrollTrigger: {
    trigger: ".testimonial-wrapper",
    markers: false,
    start: "top 100%",
    end: "center 80%",
    scrub: true,
  },
});
gsap.to(".blog-card", {
  visibility: "visible",
  delay: 0,
  duration: 2,
  left: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".blog-card",
    markers: false,
    start: "top 100%",
    end: "bottom 50%",
    scrub: true,
  },
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
