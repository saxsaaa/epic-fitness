// Initialize Swiper for testimonials
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".car-swipper", {
  effect: "cards",
  grabCursor: true,
  loop: true, // Enable infinite loop
  initialSlide: 2, // Start with the card at index 3 (zero-based index)
});
