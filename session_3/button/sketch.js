var r,g,b;

function setup() {
    createCanvas(600,600);
    r,g,b = 0,0,0;
}

function draw() {
    background(r,g,b);
    fill(255,0,0);
    ellipse(width/2,height/2,40,40);

}

function mousePressed() {
    var d = dist(mouseX,mouseY,width/2,height/2);
    if (d < 20){
        r = random(255);
        g = random(255);
        b = random(255);
    }
}
