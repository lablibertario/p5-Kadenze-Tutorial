var button;
var canvas;
var x = 0;
var y = 0;

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(0,0);
    button = createButton('change');
    button.position(x,y);
    button.mousePressed(change);
    noLoop();
    colorMode(HSB);
}

function draw() {
    background(200);
    change();
}

function change() {
    background(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    ellipse(width/2, height/2, 200, 100);

    x += random(-2, 5);
    y += random(-2, 5);
    button.position(x,y);
}
