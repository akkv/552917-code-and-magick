(function() {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var setupOpen = document.querySelector('.setup-open');
  window.setup = document.querySelector('.setup');
  var setupClose = document.querySelector('.setup-close');
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var DEFAULT_Y = '80px';
  var DEFAULT_X = '50%';

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setup.style.top = DEFAULT_Y;
    setup.style.left = DEFAULT_X;

  };
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
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
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });
})();
