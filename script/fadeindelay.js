const textFadeEls = document.querySelectorAll('.fade-in-text');

const textObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.5
});

textFadeEls.forEach(el => textObserver.observe(el));