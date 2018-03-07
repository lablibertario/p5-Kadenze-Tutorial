var mic;

function setup() {
    createCanvas(640, 480);

    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(200);

    var vol = mic.getLevel();

    var h = map (vol, 0, 0.5, height, 0);
    ellipse(width/2, h-25, 50, 50);
}
