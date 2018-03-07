var finger;
var button;
var playing;

function setup() {
    finger = createVideo("tinder-robot-finger.webm");
    button = createButton("play");
    playing = false;
    button.mousePressed(buttonChange);
}

function draw() {

}

function buttonChange() {
    if (playing) {
        finger.pause();
        button.html("play");
    } else {
        finger.loop();
        button.html('pause');
    }
    playing = !playing;
}
