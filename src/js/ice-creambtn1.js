(() => {
  const refs = {
    openMenuBtn: document.querySelector('.btn--first'),
    menu: document.querySelector('.products-overlay__first '),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
  }
})();