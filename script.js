// Add smooth scrolling to anchor links (optional)
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
