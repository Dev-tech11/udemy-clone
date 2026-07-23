document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      link.style.opacity = '0.9';
    });
  });
});
