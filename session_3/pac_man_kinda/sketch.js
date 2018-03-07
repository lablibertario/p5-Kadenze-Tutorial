var circleX = 450;
var circleY = 300;
var diameter = 100;
var movingRight = 7; // just some constant that is not true/false
var mouthTopRight, mouthBottomRight, mouthTopLeft, mouthBottomLeft;

function setup() {
    createCanvas(600,600);
    mouthTopRight = PI / 6;
    mouthBottomRight = 11 * PI / 6;
    mouthTopLeft = 7 * PI / 6;
    mouthBottomLeft =  5 * PI / 6;
}

function draw() {
    background(0);
    fill(255,255,0);
    // ellipse(circleX,circleY,diameter,diameter);
    // arc(circleX,circleY,diameter,diameter, PI / 6, 11 * PI / 6 ,PIE);

    if (movingRight == 7) {
        ellipse(circleX,circleY,diameter,diameter);
    } else if (movingRight == true) {
        arc(circleX,circleY,diameter,diameter, mouthTopRight, mouthBottomRight,PIE);
    } else if (movingRight == false) {
        arc(circleX,circleY,diameter,diameter, mouthTopLeft, mouthBottomLeft, PIE);
    }


    if (keyIsPressed){
        if (keyCode == UP_ARROW) {
            circleY -= 5;
        } else if (keyCode == DOWN_ARROW) {
            circleY += 5;
        } else if (keyCode == LEFT_ARROW) {
            circleX -= 5;
            movingRight = false;
        } else if (keyCode == RIGHT_ARROW) {
            circleX += 5;
            movingRight = true;
        }

    }
}

// function keyPressed() {
//     if (keyCode == UP_ARROW && circleY > diameter/2){
//         circleY -= 5;
//     } else if (keyCode == DOWN_ARROW && circleY < height - diameter/2) {
//         circleY += 5;
//     } else if (keyCode == LEFT_ARROW && circleX > diameter/2) {
//         circleX -= 5;
//         movingRight = false;
//     } else if (keyCode == RIGHT_ARROW && circleX < width - diameter/2) {
//         circleX += 5;
//         movingRight = true;
//     }
//
// }
