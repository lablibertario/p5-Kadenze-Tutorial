var canvas;
var rSlider;
var gSlider;
var bSlider;
var rP;
var gP;
var bP;

function setup() {
    canvas = createCanvas(640, 480);

    rSlider = createSlider(0, 255, 100);
    rP = createP(rSlider.value());

    gSlider = createSlider(0, 255, 100);
    gP = createP(gSlider.value());

    bSlider = createSlider(0, 255, 100);
    bP = createP(bSlider.value());



}

function draw() {
    var g = gSlider.value();
    var r = rSlider.value();
    var b = bSlider.value();
    rP.html(r);
    gP.html(g);
    bP.html(b);
    background(r,g,b);
}
