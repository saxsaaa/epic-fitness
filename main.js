import { gsap } from "gsap";

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// Wrap your code inside the window.onload function to ensure everything is loaded before execution
window.onload = function () {
  // Hide preloader once the page content is loaded
  document.getElementById("preloader").style.display = "none";

  // Start your animation after the preloader is hidden
  startLoaderAnimation();
};

// Function to start the loader animation using GSAP
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

// Event listener to reset the preloader animation when the page is about to be reloaded
window.addEventListener("beforeunload", function () {
  // Show the preloader
  var preloader = document.getElementById("preloader");
  preloader.style.display = "block";

  // Add a delay before hiding the preloader
  setTimeout(function () {
    // Hide the preloader after a short delay (100 milliseconds)
    preloader.style.display = "none";
  }, 100); // Adjust this delay if needed
});
