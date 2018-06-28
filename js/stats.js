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

var renderText = function (ctx, props) {
  ctx.font = props.font;
  ctx.fillStyle = props.color;
  ctx.fillText(props.text, props.x, props.y);
};

var generateRandomRGBA = function () {
  var randomVal = Math.floor(1 + Math.random() * 255);
  return 'rgba(0, 0, ' + randomVal + ',1)';
};

var renderStatsBar = function (ctx, props) {
  props.time = Math.round(props.time);
  ctx.fillStyle = (props.name === YOUR_OBJECT.name ? YOUR_OBJECT.color : generateRandomRGBA());
  ctx.fillRect(props.x, props.y - BAR_HEIGHT * props.value, BAR_WIDTH, BAR_HEIGHT * props.value);

  renderText(ctx, {
    text: props.time,
    x: props.x,
    y: props.y - BAR_HEIGHT * props.value - 3,
    color: TEXT_COLOR,
    font: TEXT_FONT
  });
  renderText(ctx, {
    text: props.name,
    x: props.x,
    y: props.y + 15,
    color: TEXT_COLOR,
    font: TEXT_FONT
  });
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  for (var i = 0; i < 4; i++) {
    renderStatsBar(ctx, {
      x: CLOUD_X + GAP + (GAP + BAR_WIDTH) * i,
      y: CLOUD_HEIGHT,
      time: times[i],
      name: names[i],
      value: times[i] / maxTime
    });
  }

  renderText(ctx, {
    text: 'Ура вы победили!',
    x: CLOUD_X + GAP,
    y: CLOUD_Y + VERTICAL_GAP,
    color: TEXT_COLOR,
    font: TEXT_FONT
  });
  renderText(ctx, {
    text: 'Список результатов:',
    x: CLOUD_X + GAP,
    y: CLOUD_Y + VERTICAL_GAP * 2,
    color: TEXT_COLOR,
    font: TEXT_FONT
  });
};






































