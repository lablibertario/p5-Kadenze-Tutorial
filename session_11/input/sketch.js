var greeting, input, button, canvas;

function setup() {
    greeting = createP("what is your name?");
    greeting.position(20,0);

    input = createInput();
    input.position(20,40);

    button = createButton("submit");
    button.position(160,40);
    button.mousePressed(greet);

    canvas = createCanvas(640, 480);
    canvas.position(20, 70);

}


function greet() {
    var name = input.value();
    for (var i=0; i < 300; i++) {
        push();
        translate(random(width), random(height));
        rotate(random(radians(360)));
        stroke(0);
        fill(0, random(255), 0, random(255));
        textSize(80);
        text(name, 0, 0);
        pop();
    }
    input.value('');
}
