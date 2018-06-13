'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 240;
var CLOUD_X = 100;
var CLOUD_Y = 30;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP = 50;
var VERTICAL_GAP = 20;

var YOUR_OBJECT = {
  name: 'Вы',
  color: 'rgba(255, 0, 0, 1)'
};

var TEXT_FONT = 'normal 16px PT Mono';
var TEXT_COLOR = '#000';

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

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

var renderText = function (ctx, text, x, y, color, font) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var generateRandomRGBA = function () {
  var randomVal = Math.floor(1 + Math.random() * 255);
  return 'rgba(0, 0, ' + randomVal + ',1)';
};

var renderStatsBar = function (ctx, x, y, time, name, maxTime) {
  time = Math.round(time);
  ctx.fillStyle = (name === YOUR_OBJECT.name ? YOUR_OBJECT.color : generateRandomRGBA());
  ctx.fillRect(x, y - (BAR_HEIGHT * time) / maxTime, BAR_WIDTH, (BAR_HEIGHT * time) / maxTime);

  renderText(ctx, time, x, y - (BAR_HEIGHT * time) / maxTime - 3, TEXT_COLOR, TEXT_FONT);
  renderText(ctx, name, x, y + 15, TEXT_COLOR, TEXT_FONT);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var i = 0; i < 4; i++) {
    renderStatsBar(ctx, CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT, times[i], names[i], maxTime);
  }

  renderText(ctx, 'Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + VERTICAL_GAP, TEXT_COLOR, TEXT_FONT);
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP, CLOUD_Y + VERTICAL_GAP * 2, TEXT_COLOR, TEXT_FONT);
};
