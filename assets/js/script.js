const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

const els = document.querySelectorAll('.fade-in-on-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      if (target.classList.contains('is-visible')) return;
      const index = Array.from(target.parentNode.children).indexOf(target);
      target.style.transitionDelay = `${index * 0.2}s`;
      target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1
});
els.forEach(el => observer.observe(el));