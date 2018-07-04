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

  colorToHEX: function (RGB) {
    var a = RGB.split('(')[1].split(')')[0];
    a = a.split(',');
    var b = a.map(function (x) {
      x = parseInt(x, 10).toString(16);
      return (x.length === 1) ? '0' + x : x;
    });
    b = '#' + b.join('');
    return b;
  }
};
