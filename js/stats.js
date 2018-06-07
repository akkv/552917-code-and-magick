'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 240;
var CLOUD_X = 100;
var CLOUD_Y = 30;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP = 50;
var VERTICAL_GAP = 20;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + 40, y);
  ctx.lineTo(CLOUD_WIDTH + x - 40, y);
  ctx.lineTo(CLOUD_WIDTH + x, y + 40);
  ctx.lineTo(CLOUD_WIDTH + x, CLOUD_HEIGHT + y - 40);
  ctx.lineTo(CLOUD_WIDTH + x - 40, CLOUD_HEIGHT + y);
  ctx.lineTo(x + 40, CLOUD_HEIGHT + y);
  ctx.lineTo(x, CLOUD_HEIGHT + y - 40);
  ctx.lineTo(x, y + 40);
  ctx.lineTo(x + 40, y);
  ctx.fill();
};
var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);
  ctx.fillStyle = '#000';
  ctx.font = 'normal 16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + VERTICAL_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + VERTICAL_GAP * 2);
  var renderStatsBar = function () {
    for (var i = 0; i < 4; i++) {
      times[i] = Math.round(times[i]);
      var randForBlue = Math.floor(2 + Math.random() * 9);
      var blue = 'rgba(0, 0, 128, 0.' + randForBlue + ')';
      ctx.fillStyle = (names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : blue);
      ctx.fillRect(CLOUD_X + (GAP * (i + 1) + BAR_WIDTH * i), CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - VERTICAL_GAP + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(times[i], CLOUD_X + (GAP * (i + 1) + BAR_WIDTH * i), CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - VERTICAL_GAP + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) - 3);
      ctx.fillText(names[i], CLOUD_X + (GAP * (i + 1) + BAR_WIDTH * i), (CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - VERTICAL_GAP + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime)) + ((BAR_HEIGHT * times[i]) / maxTime) + 15);
    }
  };
  renderStatsBar();
};
