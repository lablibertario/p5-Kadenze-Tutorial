var dotSize = 9;
var angleOffsetA;
var angleOffsetB;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(0);
    noLoop();

    angleOffsetA = radians (1.5);
    angleOffsetB = radians(50);

}

function draw() {
    background(255);
    seed1(dotSize, radians(270), width/2, height);

}

function seed1(dotsize, angle, x, y) {
    if (dotsize > 1.0) {

        var r = random (0, 1.0);

        if (r > 0.02) {

            ellipse(x, y, dotsize, dotsize);
            var newX = x + cos(angle) * dotsize;
            var newY = y + sin(angle) * dotsize;
            seed1(dotsize * 0.99, angle - angleOffsetA, newX, newY);

        }

        else {

            ellipse(x, y, dotsize, dotsize);
            var newX = x + cos(angle);
            var newY = y + sin(angle);
            seed2(dotsize * 0.99, angle - angleOffsetA, newX, newY);
            seed1(dotsize * 0.60, angle + angleOffsetB, newX, newY);
            seed2(dotsize * 0.50, angle + angleOffsetA, newX, newY);

        }
    }
}

function seed2(dotsize, angle, x, y) {
    if (dotsize > 1.0){
        var r = random (0, 1.0);

        if (r > 0.05) {

            ellipse(x, y, dotsize, dotsize);
            var newX = x + cos(angle) * dotsize;
            var newY = y + sin(angle) * dotsize;
            seed2(dotsize * 0.99, angle + angleOffsetA, newX, newY);

        } else {

            ellipse(x, y, dotsize, dotsize);
            var newX = x + cos(angle);
            var newY = y + sin(angle);
            seed2(dotsize * 0.99, angle - angleOffsetA, newX, newY);
            seed1(dotsize * 0.60, angle + angleOffsetB, newX, newY);
            seed2(dotsize * 0.50, angle + angleOffsetA, newX, newY);

        }
    }
}

function mousePressed(){
    background(255);
    var a = map(mouseX, 0, 360, 0, width);
    seed1(dotSize, radians(a), width/2, height);
}
