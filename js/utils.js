'use strict';

window.utils = {
  shuffleArray: function (array) {
    for (var i = array.length - 1; i > 1; i--) {
      var r = Math.round(Math.random() * i);
      var t = array[i];
      array[i] = array[r];
      array[r] = t;
    }
  },

  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  colorToHEX: function (rgb) {
    var a = rgb.split('(')[1].split(')')[0];
    a = a.split(',');
    var b = a.map(function (x) {
      x = parseInt(x, 10).toString(16);
      return (x.length === 1) ? '0' + x : x;
    });
    b = '#' + b.join('');
    return b;
  },
  createErrorMessage: function (message) {
    var element = document.createElement('div');
    element.classList.add('error-message');
    element.style.background = 'red';
    element.style.position = 'fixed';
    element.style.zIndex = 5;
    element.style.top = '10px';
    element.style.width = '100%';
    element.style.textAlign = 'center';
    element.textContent = message;
    return element;
  }
};
