const menuToggle = document.querySelector('#menuToggle');
const navPanel = document.querySelector('#navPanel');
const navLinks = document.querySelectorAll('.nav-links a, .nav-contact');
const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = navPanel?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navPanel?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  if (formStatus) {
    formStatus.textContent = `Thanks${name ? `, ${name}` : ''}. Your inquiry is on its way.`;
  }
  contactForm.reset();
});
