var angle = 0;
var offset = 100;
var scalar = 50; // amplitude
var speed = 0.06;

function setup() {
    createCanvas(900,600);
    fill(0);
}

function draw() {
  background(255);

  var y1 = offset + sin(angle) * scalar;
  var y2 = offset + sin(angle + 0.4) * scalar;
  var y3 = offset + sin(angle + 0.8) * scalar;

  ellipse(50, y1, 50, 50);
  ellipse(150, y2, 50, 50);
  ellipse(250, y3, 50, 50);

  angle+= speed;
}
