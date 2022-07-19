(() => {
  const cookiesPopup = document.querySelector('.js-cookies-popup');
  const cookieAcceptBtn = document.querySelector('.js-cookies-accept');

  // Create cookie
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  // Delete cookie
  function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=;' + expires + ';path=/';
  }

  // Read cookie
  function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  // Set cookie consent
  function acceptCookieConsent() {
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    cookiesPopup.classList.remove('active');
  }

  let cookie_consent = getCookie('user_cookie_consent');
  setTimeout(function () {
    if (cookie_consent != '') {
      cookiesPopup.classList.remove('active');
    } else {
      cookiesPopup.classList.add('active');
    }
  }, 2000);

  cookieAcceptBtn.addEventListener('click', function () {
    acceptCookieConsent();
  });
})();
