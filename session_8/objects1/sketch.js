var fly;
var daisy;

function setup() {
    createCanvas(windowWidth, windowHeight);
    fly = new Bug(width/2, height/2);
    daisy = new Bug(100, 200);
}

function draw() {
    background(255);
    fly.update();
    fly.draw();
    daisy.update();
    daisy.draw();
}

function Bug(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.diameter = random(10,100);
    this.speed = random(2,10);

    this.draw = function() {
        fill(0);
        stroke(0,255,0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.update = function() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
}
