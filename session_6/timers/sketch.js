var timer = 100;
var bgColor = 0;
var nextTime = timer;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);
  if (millis() > nextTime){
      bgColor += 20;
      nextTime = millis() + timer;
  }

}
