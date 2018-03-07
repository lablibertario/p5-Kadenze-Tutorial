var rows = 100;
var spacing = 2;
var totalSpacing = (rows - 1) * spacing;
var barWidth;
var numbers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(1);
    // noLoop();
    barWidth =  (width - totalSpacing)/rows;
}

function draw() {
    background(0);

    // set up array values
    for (var i = 0; i < rows; i++) {
        numbers[i] = round(random(100));
    }

    // bar graph
    for (var i = 0; i < rows; i++) {
        fill(255);
        var barHeight = map(numbers[i], 0, 100, 0, height);
        rect(barWidth * i + spacing * i, height - barHeight, barWidth, barHeight);
    }

    // circles
    for (var i = 0; i < rows; i++) {
        var a = map(numbers[i], 0, 100, 0, 255);
        fill(255,0,0,a);
        noStroke();
        ellipse(barWidth * i + spacing * i + barWidth/2, height/2, barWidth, barWidth);
    }
}
