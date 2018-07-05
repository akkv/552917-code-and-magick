'use strict';
(function () {
  var onSave = function () {
    window.closePopup();
  };
  var submitButton = document.querySelector('.setup-submit');
  var form = document.querySelector('.setup-wizard-form');
  submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), onSave, window.onError);
  });
})();
