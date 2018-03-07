var angle = 0;

function setup() {
    createCanvas(windowWidth,windowHeight);
    fill(0);
}

function draw() {
    background(255);

    // less elegant way?
    // line(mouseX - 50, mouseY - 50, mouseX + 50, mouseY + 50);
    // line(mouseX + 50, mouseY - 50, mouseX - 50, mouseY + 50);

    push();
    translate(mouseX, mouseY);
    rotate(radians(angle));
    // scale(2);
    line(-50, -50, 50, 50);
    line(50, -50, -50, +50);
    if (angle > 0 && angle < 360){
        angle++;
    } else if (angle == 360) {
        angle = 0;
    }  else if (angle == -360) {
        angle = 1;
    } else if (angle <= 0) {
        angle--;
    }
    pop();

    noFill();
    rect(10, 10, width -20, height -20);

}
