   //Menu Open Close
  let menu = document.querySelector(".menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
  };

  // Close menu on scroll
  window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
  };

  // Scroll Reveal Initialization
const animate = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

// Reveal animations for specific sections
animate.reveal('.home-text', { origin: 'left' });
animate.reveal('.home-img', { origin: 'bottom' });
animate.reveal('.ser-box', { origin: 'bottom', interval: 100 });
animate.reveal('.team-box', { origin: 'bottom', interval: 100 });
animate.reveal('.faq-item', { origin: 'bottom', interval: 100 });
animate.reveal('.footer', { origin: 'bottom' });

// Adjust for smaller screens
if (window.innerWidth < 768) {
  animate.reveal('.home-text', { origin: 'bottom' });
  animate.reveal('.ser-box', { origin: 'bottom', interval: 50 });
  animate.reveal('.team-box', { origin: 'bottom', interval: 50 });
  animate.reveal('.faq-item', { origin: 'bottom', interval: 50 });
  animate.reveal('.footer', { origin: 'bottom' });
}
