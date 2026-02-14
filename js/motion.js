// Motion and scroll behavior
// Respects prefers-reduced-motion

(function() {
  'use strict';

  // Check user's motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header scroll behavior - add shadow when scrolled
  const header = document.querySelector('header');
  if (header) {
    function handleHeaderScroll() {
      if (window.scrollY > 10) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // Check on load
  }

  // Scroll reveal for sections
  if (!prefersReducedMotion) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally unobserve after revealing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with data-reveal attribute
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });
  } else {
    // If user prefers reduced motion, show everything immediately
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => {
      el.classList.add('revealed');
    });
  }
})();
