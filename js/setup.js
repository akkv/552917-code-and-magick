'use strict';
(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var wizardsContainer = document.querySelector('.setup-similar-list');

  var createWizardElement = function (wizardData) {
    var wizard = wizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = wizardData.name;
    wizard.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;
    return wizard;
  };

  var createWizardsSimilarList = function (wizardsData) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(createWizardElement(wizardsData[i]));
    }
    return fragment;
  };

  window.renderSimilarList = function (data) {
    window.utils.shuffleArray(data);
    wizardsContainer.appendChild(createWizardsSimilarList(data));
  };

  // Настройки волшебника
  var exampleCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var exampleEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var exampleFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  coat.addEventListener('click', function () {
    coat.style.fill = exampleCoatColors[window.utils.getRandomInt(0, exampleCoatColors.length)];
  });
  eyes.addEventListener('click', function () {
    eyes.style.fill = exampleEyesColors[window.utils.getRandomInt(0, exampleEyesColors.length)];
  });
  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = exampleFireballColors[window.utils.getRandomInt(0, exampleFireballColors.length)];
    fireball.querySelector('input').value = window.utils.colorToHEX(fireball.style.backgroundColor);
  });
})();

// загрузка и отправка данных
(function () {
  var submitButton = document.querySelector('.setup-submit');
  var form = document.querySelector('.setup-wizard-form');
  var onError = function (message) {
    document.body.appendChild(window.utils.createErrorMessage(message));
  };
  var onSave = function () {
    window.closePopup();
  };

  window.backend.load(window.renderSimilarList, onError);
  submitButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), onSave, onError);
  });
})();
