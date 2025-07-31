// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
if (navMenu) {
  document.querySelectorAll('.nav-link').forEach(n =>
    n.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    })
  );
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetElem = document.querySelector(this.getAttribute('href'));
    if (targetElem) {
      e.preventDefault();
      targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.opacity = 1;
    backToTopBtn.style.transform = 'translateY(0)';
  } else {
    backToTopBtn.style.opacity = 0;
    backToTopBtn.style.transform = 'translateY(10px)';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !emailRegex.test(email) || !subject || !message) {
      alert('Please fill in all fields with valid information.');
      return;
    }

    // Use mailto for sending email
    const mailtoLink = `mailto:peraisoodanviswanath.s@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`)}`;
    window.location.href = mailtoLink;
    this.reset();
  });
}