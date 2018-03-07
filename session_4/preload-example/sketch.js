var img;

function preload() {
    img = loadImage("BearAndPeacock.jpg");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

}

function draw() {
    background(255);
    var aspect = img.height / img.width;
    var imageWidth = mouseX;
    var imageHeight = imageWidth* aspect;
    image(img, 0, 0, imageWidth, imageHeight);
}
