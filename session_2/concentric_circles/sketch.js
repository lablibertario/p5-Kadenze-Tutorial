var canvasWidth = 600;
var canvasHeight = 600;

var x =  10;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

}

function draw() {
    var s = second();
    for (var i = 0; i < 15; i++){
        var r = random(255);
        noFill();
        stroke(r);
        ellipse(height/2,width/2,x,x);
        x += 20;
    }

    // if (second() >= s + 3) (
    //     background(255);
    // )

    if (x/2 > canvasHeight){
        x = 10;
    }
}
