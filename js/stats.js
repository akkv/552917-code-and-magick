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

  var renderStatsBar = function (x, y, time, name) {
    time = Math.round(time);
    var randForBlue = Math.floor(1 + Math.random() * 255);
    var blue = 'rgba(0, 0, ' + randForBlue + ',1)';
    ctx.fillStyle = (name === 'Вы' ? 'rgba(255, 0, 0, 1)' : blue);
    ctx.fillRect(x, y - (BAR_HEIGHT * time) / maxTime, BAR_WIDTH, (BAR_HEIGHT * time) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(time, x, y - (BAR_HEIGHT * time) / maxTime - 3);
    ctx.fillText(name, x, y + 15);
  };

  for (var i = 0; i < 4; i++) {
    renderStatsBar(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT, times[i], names[i]);
  }
};
