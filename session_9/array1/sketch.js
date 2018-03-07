var numbers = [
    123,
    456,
    789
];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);
    stroke(255);
    line(numbers[0], 0, numbers[0], height);
    line(numbers[1], 0, numbers[1], height);
    line(numbers[2], 0, numbers[2], height);
}
