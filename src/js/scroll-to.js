(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.scroll-to')
      ? document.querySelector('.scroll-to').clientHeight
      : 0;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const overlay = document.querySelector('.js-overlay-modal');

    links.forEach(each => {
      each.addEventListener('click', function () {
        // Close the mobile menu
        mobileMenu.classList.remove('is-open');
        overlay.classList.remove('active');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);

        const currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 500);
      });
    });
  };
  scrollTo();

  // Scroll to top button

  //Get the button:
  scrollToTop = document.querySelector('[data-scroll-to-top]');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollToTop.classList.add('is-active');
    } else {
      scrollToTop.classList.remove('is-active');
    }
  }
})();
