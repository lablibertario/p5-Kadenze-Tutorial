var canvasWidth = 600;
var canvasHeight = 600;

var x =  10;
var movingRight = true;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

}

function draw() {
    background(255);
    if (movingRight){
        if (x < width - 10){
            x += 5;
        } else {
            movingRight = false;
        }
    } else if (!movingRight){
        if (x > 10) {
            x -= 5;
        } else {
            movingRight = true;
        }
    }

    line(x,0,x,height);
}
