var toss = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(255);


    if (toss == 0){
        fill(0);
    } else if (toss == 1) {
        fill(0,255,0);
    }
    ellipse(width/2, height/2, 50, 50);

}

function coinToss() {
    // random float between 0, 1
    var coin = random(1);

    if (coin <= .5) {
        coin = 0;
    } else {
        coin = 1;
    }
    return coin;
}

function mousePressed() {
    toss = coinToss();
}
