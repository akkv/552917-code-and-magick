'use strict';
(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var createWizardElement = function (wizardData) {
    var wizard = wizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = wizardData.name;
    wizard.querySelector('.wizard-coat').style.fill = wizardData.colorCoat;
    wizard.querySelector('.wizard-eyes').style.fill = wizardData.colorEyes;
    return wizard;
  };

  var similarList = document.querySelector('.setup-similar-list');
  var similar = document.querySelector('.setup-similar');

  window.renderWizardsSimilarList = function (wizardsData) {
    var fragment = document.createDocumentFragment();
    similarList.innerHTML = '';
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(createWizardElement(wizardsData[i]));
    }
    similarList.appendChild(fragment);
    similar.classList.remove('hidden');
  };
})();
