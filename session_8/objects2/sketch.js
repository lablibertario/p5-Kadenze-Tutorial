var up, down;
var bgColor = 127;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Helvetica");
    textSize(20);
    up = new Button(100, 300, 150, 300, "UP");
    down = new Button(400, 400, 100, 30, "DOWN");

}

function draw() {
    background(bgColor);
    up.draw();
    down.draw();

}

function Button(x, y, w, h, label){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;

    this.draw = function() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
        fill(0);
        textAlign(CENTER, CENTER);
        text(this.label, this.x, this.y, this.w, this.h);
    }

    this.test = function() {
        return(mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this. h)
    }

}

function mousePressed() {
    if (up.test() == true){
        bgColor += 7;
    } else if (down.test() == true) {
        bgColor -= 7;
    }
}
