'use strict';
(function () {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var setupOpen = document.querySelector('.setup-open');
  window.setup = document.querySelector('.setup');
  var setupClose = document.querySelector('.setup-close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEFAULT_Y = '80px';
  var DEFAULT_X = '50%';

  var openPopup = function () {
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

  };

  window.closePopup = function () {
    window.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.setup.style.top = DEFAULT_Y;
    window.setup.style.left = DEFAULT_X;
    if (document.querySelector('.errorMessage') !== null) {
      var element = document.querySelector('.errorMessage');
      element.parentNode.removeChild(element);
    }
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      window.closePopup();
    }
  };
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });
  setupClose.addEventListener('click', function () {
    window.closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      window.closePopup();
    }
  });
})();
