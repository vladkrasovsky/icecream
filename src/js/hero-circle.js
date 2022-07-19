var bubbleLifeTime = 20;
var noOfBubbles = 100;

var wrapper = document.querySelector('.wrapper');
var bubbles = [];

init();

function init() {
  var bubble;
  for (var i = 0; i < noOfBubbles; i++) {
    bubble = createBubble();
    wrapper.appendChild(bubble);
  }
}

function createBubble() {
  var circleContainer = document.createElement('div');
  circleContainer.classList.add('circle-container');
  circleContainer.style.transform =
    'rotate(' + Math.floor(Math.random() * 360) + 'deg)';

  var circle = createCircle();
  circleContainer.appendChild(circle);

  return circleContainer;
}

function createCircle() {
  var circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.animationDelay = Math.random() * bubbleLifeTime + 's';

  var side = 5 + Math.floor(Math.random() * 5) + 'px';
  circle.style.width = side;
  circle.style.height = side;

  return circle;
}
