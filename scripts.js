document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
