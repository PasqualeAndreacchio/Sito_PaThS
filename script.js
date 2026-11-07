/* =========================================================
   PaThS 2027 – script.js
   Vanilla JS: smooth scroll, navbar, hamburger menu,
   day accordions, FAQ accordions, back-to-top, fade-in.
   ========================================================= */

(function () {
  'use strict';

  /* --------------------------------------------------
     1. Smooth scroll for all .scroll-link anchors
  -------------------------------------------------- */
  document.querySelectorAll('a.scroll-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile menu if open
          closeMobileMenu();
        }
      }
    });
  });

  /* --------------------------------------------------
     2. Navbar: add "scrolled" class + show/hide
  -------------------------------------------------- */
  var navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // run on load

  /* --------------------------------------------------
     3. Hamburger menu (mobile)
  -------------------------------------------------- */
  var menuBtn    = document.getElementById('menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var iconOpen   = document.getElementById('icon-open');
  var iconClose  = document.getElementById('icon-close');

  function openMobileMenu() {
    mobileMenu.classList.remove('hidden');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  /* --------------------------------------------------
     4. Day accordion (program section)
  -------------------------------------------------- */
  document.querySelectorAll('.day-header').forEach(function (header) {
    var dayId   = header.getAttribute('data-day');
    var content = document.getElementById(dayId);
    var chevron = header.querySelector('.day-chevron');

    if (!content) return;

    header.addEventListener('click', function () {
      var isHidden = content.classList.contains('hidden');

      if (isHidden) {
        content.classList.remove('hidden');
        chevron && chevron.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      } else {
        content.classList.add('hidden');
        chevron && chevron.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
      }
    });

    // Keyboard accessibility
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  /* --------------------------------------------------
     5. FAQ accordion
  -------------------------------------------------- */
  document.querySelectorAll('.faq-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item   = btn.closest('.faq-item');
      var answer = item && item.querySelector('.faq-answer');
      var icon   = btn.querySelector('.faq-icon');

      if (!answer) return;

      var isOpen = !answer.classList.contains('hidden');

      // Close all other open items first
      document.querySelectorAll('.faq-item').forEach(function (other) {
        var otherAnswer = other.querySelector('.faq-answer');
        var otherIcon   = other.querySelector('.faq-icon');
        var otherBtn    = other.querySelector('.faq-btn');
        if (otherAnswer && other !== item) {
          otherAnswer.classList.add('hidden');
          otherIcon && otherIcon.classList.remove('open');
          otherBtn && otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        answer.classList.add('hidden');
        icon && icon.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        answer.classList.remove('hidden');
        icon && icon.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* --------------------------------------------------
     6. Back to top button
  -------------------------------------------------- */
  var backToTop = document.getElementById('back-to-top');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------
     7. Scroll-triggered fade-in for sections
  -------------------------------------------------- */
  var fadeElements = document.querySelectorAll('section');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    fadeElements.forEach(function (el) {
      el.classList.add('section-fade-in');
      observer.observe(el);
    });
  }

  /* --------------------------------------------------
     8. Active nav link highlight on scroll
  -------------------------------------------------- */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('nav a.scroll-link[href^="#"]');

  function setActiveLink() {
    var scrollPos = window.scrollY + 100;
    var current = '';

    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('text-paths-accent', 'font-semibold');
      var href = link.getAttribute('href').replace('#', '');
      if (href === current) {
        link.classList.add('text-paths-accent', 'font-semibold');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

})();

