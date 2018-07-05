'use strict';

(function () {
  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';
  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Ошибка загрузки данных. Ответ сервера:' + xhr.status + ' ' + xhr.statusText);
        }
      }
      );
      xhr.open('GET', URL_LOAD);
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Ошибка отправки данных. Ответ сервера :' + xhr.status + ' ' + xhr.statusText);
        }
      }
      );
      xhr.open('POST', URL_SAVE);
      xhr.send(data);
    }
  };
})();
