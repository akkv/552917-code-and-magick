'use strict';
(function () {
  var exampleCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var exampleEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var exampleFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  window.wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  coat.addEventListener('click', function () {
    var newColor = exampleCoatColors[getRandomInt(0, exampleCoatColors.length)];
    coat.style.fill = newColor;
    window.wizard.onCoatChange(newColor);
  });
  eyes.addEventListener('click', function () {
    var newColor = exampleEyesColors[getRandomInt(0, exampleEyesColors.length)];
    eyes.style.fill = newColor;
    window.wizard.onEyesChange(newColor);
  });
  fireball.addEventListener('click', function () {
    var newColor = exampleFireballColors[getRandomInt(0, exampleFireballColors.length)];
    fireball.style.backgroundColor = newColor;
    fireball.querySelector('input').value = newColor;
  });
})();

