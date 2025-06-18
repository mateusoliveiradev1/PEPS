// Menu Mobile
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    toggle.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    spans[0].classList.toggle('rotate-45');
    spans[1].classList.toggle('opacity-0');
    spans[2].classList.toggle('-rotate-45');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      toggle.classList.remove('open');
      const spans = toggle.querySelectorAll('span');
      spans[0].classList.remove('rotate-45');
      spans[1].classList.remove('opacity-0');
      spans[2].classList.remove('-rotate-45');
    });
  });
}
