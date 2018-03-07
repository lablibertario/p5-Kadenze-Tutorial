var x = 0;
var y = 0;
var targetX = 0;
var targetY = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    ellipse(x, y, 50, 30);
    // line(x, 0, x, height);
    // line(0, y, width, y);


    var ease = 0.2;
    var diffX = targetX - x;
    x += diffX * ease;

    var diffY = targetY - y;
    y += diffY * ease;
}

function mousePressed(){
    targetX = mouseX;
    targetY = mouseY;
}
