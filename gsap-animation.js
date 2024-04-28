// Import GSAP and ScrollTrigger
import { gsap } from "./node_modules/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Preloader functionality
window.onload = function () {
  try {
    // Hide preloader once the page content is loaded
    document.getElementById("preloader").style.display = "none";

    // Start loader animation after the preloader is hidden
    startLoaderAnimation();
  } catch (error) {
    console.error("Error in preloader functionality:", error);
  }
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

// index.html animmation

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

function setupScrollAnimation(sectionSelector, startOffset, endOffset) {
  gsap.from(sectionSelector, {
    visibility: "visible",
    delay: 0,
    duration: 5,
    y: "50%",
    stagger: 0,
    ease: "linear.easeInOut",
    scrollTrigger: {
      trigger: sectionSelector,
      markers: false,
      start: startOffset,
      end: endOffset,
      scrub: true,
    },
  });
}

// Use the function for different sections
setupScrollAnimation(".going-up-animation", "-1000px 10%", "-800px 10%");
setupScrollAnimation(".team-area", "-1300px 10%", "-1000px 10%");
setupScrollAnimation(".cta", "-1000px 10%", "-500px 10%");

// Function to animate an element from the bottom with stagger
// Parameters:
// - targetSelector: Selector for the target element
// - delay: Animation delay in seconds
// - duration: Animation duration in seconds
// - distance: Distance the element should move up from the bottom
// - stagger: Stagger value for animating multiple elements
function animateFromBottom(targetSelector, delay, duration, distance, stagger) {
  gsap.from(targetSelector, {
    delay: delay,
    duration: duration,
    y: distance,
    opacity: 0, // Optional: Fade in the element during the animation
    stagger: stagger, // Optional: Add stagger for animating multiple elements
  });
}

// function usage
animateFromBottom(".mission-area-animation", 1, 1.5, 1000);
animateFromBottom(".pricing-area-animation", 1, 1.5, 1000, 0.1);
animateFromBottom(".contact-area-animation", 1, 1.5, 1000, 0.05);
