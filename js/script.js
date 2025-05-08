// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Load theme on start
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Waitlist form
const waitlistForm = document.getElementById('waitlist-form');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for joining our waitlist!');
    this.reset();
  });
}

// Contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}
