(() => {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('[data-nav-links]');
  if (!toggle || !links) return;

<<<<<<< HEAD
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
=======
  const setOpen = (open) => {
    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  toggle.addEventListener('click', () => {
    const open = !links.classList.contains('is-open');
    setOpen(open);
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 940) setOpen(false);
>>>>>>> 7976bd6f45e7d2662787d798323f8c70531eb58c
  });
})();
