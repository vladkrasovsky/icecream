(() => {
  const refs = {
    openMenuBtn: document.querySelector('.btn--third'),
    menu: document.querySelector('.products-overlay__third '),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
  }
})();