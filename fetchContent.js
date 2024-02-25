function attachEventListeners() {
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const primaryNav = document.querySelector(".primary-navigation");
  const primaryHeader = document.querySelector(".primary-header");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const isVisible = primaryNav.hasAttribute("data-visible");

      navToggle.setAttribute("aria-expanded", isVisible ? "false" : "true");
      primaryNav.toggleAttribute("data-visible");
      primaryHeader.toggleAttribute("data-overlay");
    });
  }

  // Add other event listeners as needed
}

// fetchContent.js
function fetchAndReplaceContent() {
  fetch("/template.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const headerContent = doc.querySelector("header").innerHTML;
      const footerContent = doc.querySelector("footer").innerHTML;

      const currentHeader = document.querySelector("header");
      const currentFooter = document.querySelector("footer");

      // Replace content
      currentHeader.innerHTML = headerContent;
      currentFooter.innerHTML = footerContent;
      // Reattach event listeners
      attachEventListeners();
      // After content is replaced, reattach the scroll event listener
      var navbar = document.querySelector(".nav-bg-color");
      if (navbar) {
        window.addEventListener("scroll", function () {
          var scrollY = window.scrollY;
          var windowHeight = window.innerHeight;
          var footerOffset = currentFooter.offsetTop;

          // // Check if the footer is on the screen
          // if (scrollY + windowHeight >= footerOffset) {
          //   navbar.style.opacity = "0"; // You can customize this to hide the navbar in a way that suits your design
          // } else {
          //   navbar.style.opacity = "1";
          // }

          // Change transparency based on scroll position
          if (scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        });
      }
    })
    .catch((error) => {
      console.error("Error fetching content:", error);
    });
}

document.addEventListener("DOMContentLoaded", fetchAndReplaceContent);
