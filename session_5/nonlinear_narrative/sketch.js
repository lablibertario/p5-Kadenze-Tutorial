var intro, drink, large, swimming;

/*
States:
    0 - intro
    1 - drink
    2 - large
    3 - swimming

Actions:
    eating
    drinking
    crying
*/

var state = 0;
var nextState = 0;
var counter = 0;
var typed = '';
var hasCried = false;

function preload() {
    intro = loadImage("0-tiny_door.gif");
    drink = loadImage("1-bottle.gif");
    large = loadImage("2-tall.gif");
    swimming = loadImage("3-swimming.gif");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Helvetica");
    textSize(22);
    textAlign(CENTER);

}

function draw() {
    background(255);

    if (state == nextState){
        if (state == 0) {
            image(intro, (width / 2 - intro.width / 2), 0);
        } else if (state == 1) {
            image(drink, (width / 2 - drink.width / 2), 0);
        } else if (state == 2) {
            image(large, (width / 2 - large.width / 2), 0);
        } else if (state == 3) {
            image(swimming, (width / 2 - swimming.width / 2), 0);
        }
    } else {
        counter++;
        if (counter == 30) {
            state = nextState;
            counter = 0;
        }
        var a = map(counter, 0, 30, 0, 255);
        tint(255, a);

        if (nextState == 0) {
            image(intro, (width / 2 - intro.width / 2), 0);
        } else if (nextState == 1) {
            image(drink, (width / 2 - drink.width / 2), 0);
        } else if (nextState == 2) {
            image(large, (width / 2 - large.width / 2), 0);
        } else if (nextState == 3) {
            image(swimming, (width / 2 - swimming.width / 2), 0);
        }

        tint(255, 255-a);
        if (state == 0) {
            image(intro, (width / 2 - intro.width / 2), 0);
        } else if (state == 1) {
            image(drink, (width / 2 - drink.width / 2), 0);
        } else if (state == 2) {
            image(large, (width / 2 - large.width / 2), 0);
        } else if (state == 3) {
            image(swimming, (width / 2 - swimming.width / 2), 0);
        }

    }

    text(typed, 0, 650, width, 30);

}

function keyPressed() {
    if (keyCode == BACKSPACE) {
        typed = "";
    }
}

function keyTyped() {

    if (key == '0') {
        nextState = 0;
    } else if (key == '1') {
        nextState = 1;
    } else if (key == '2') {
        nextState = 2;
    } else if (key == '3') {
        nextState = 3;
    } else if (keyCode == RETURN) {

        if (typed == "drink" || typed == "DRINK") {
            if (hasCried == true) {
                nextState = 3;
            } else {
                nextState = 1;
            }
            typed = '';
        } else if (typed == 'eat') {
            nextState = 2;
            typed = '';
        } else if (typed == 'intro') {
            nextState = 0;
            hasCried = false;
            typed = '';
        } else if (typed == 'cry' && state == 2) {
            hasCried = true;
            typed = '';
        }

    } else {
        typed += key;
    }
}
