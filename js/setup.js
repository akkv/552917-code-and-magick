'use strict';
(function () {
  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var exampleNamesParts = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var exampleSurnamesParts = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var exampleCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var exampleEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('div');
  var wizardsContainer = document.querySelector('.setup-similar-list');

  var generateWizardsData = function (amount) {
    var wizards = [];
    for (var i = 0; i < amount; i++) {
      wizards.push({
        name: exampleNamesParts[getRandomInt(0, exampleNamesParts.length)] + ' ' + exampleSurnamesParts[getRandomInt(0, exampleSurnamesParts.length)],
        coatColor: exampleCoatColors[getRandomInt(0, exampleCoatColors.length)],
        eyesColor: exampleEyesColors[getRandomInt(0, exampleEyesColors.length)]
      });
    }
    return wizards;
  };

  var createWizardElement = function (wizardData) {
    var wizard = wizardTemplate.cloneNode(true);
    wizard.querySelector('.setup-similar-label').textContent = wizardData.name;
    wizard.querySelector('.wizard-coat').style.fill = wizardData.coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = wizardData.eyesColor;
    return wizard;
  };

  var createWizardsSimilarList = function (wizardsData) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizardsData.length; i++) {
      fragment.appendChild(createWizardElement(wizardsData[i]));
    }
    return fragment;
  };
  wizardsContainer.appendChild(createWizardsSimilarList(generateWizardsData(4)));

  var exampleFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  coat.addEventListener('click', function () {
    coat.style.fill = exampleCoatColors[getRandomInt(0, exampleCoatColors.length)];
  });
  eyes.addEventListener('click', function () {
    eyes.style.fill = exampleEyesColors[getRandomInt(0, exampleEyesColors.length)];
  });
  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = exampleFireballColors[getRandomInt(0, exampleFireballColors.length)];
    fireball.querySelector('input').value = fireball.style.backgroundColor;
  });
})();
