var finger;

function setup() {
    createCanvas(640, 480);
    finger = createVideo("tinder-robot-finger.webm");
    finger.loop();
    finger.hide();
}

function draw() {

    image(finger, 30, 30);
    filter(POSTERIZE, 3);

    image(finger, 200, 200);

}
