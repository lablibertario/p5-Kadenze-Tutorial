

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);

    // drawBullseye(width/2, height/2);
    drawBullseye(mouseX, mouseY, 300);

    drawBullseye(mouseX, mouseY + 200, 100 );
}

function drawBullseye(x, y, size) {
    var step = size*.2;

    fill(255);
    ellipse(x, y, size, size);

    fill(0);
    ellipse(x, y, size - step, size - step);

    fill(0, 150, 200);
    ellipse(x, y, size - 2*step, size - 2*step);

    fill(255, 0, 0);
    ellipse(x, y, size - 3*step, size - 3*step);

    fill(244, 238, 70);
    ellipse(x, y, size - 4*step, size - 4*step);

    line(x, y- 10, x, y+ 10);
    line(x-10, y, x+10, y);
}
