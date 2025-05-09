// Default dark mode on load
if (!localStorage.getItem('theme') || localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
} else {
  document.documentElement.classList.remove('dark');
}

// Theme toggle and icon update
const toggle = document.getElementById('theme-toggle');
const updateToggleIcon = () => {
  toggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
};
updateToggleIcon();

toggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateToggleIcon();
});

// Smooth scroll for anchor links
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
