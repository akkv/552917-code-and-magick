'use strict';
window.utils = {
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
