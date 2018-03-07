function setup() {
    createCanvas(windowWidth,windowHeight);
    noFill();
}

function draw() {
    var f = 50;
    background(255);

    for (var x = f; x < width - f; x += f){
        for (var y = f; y < height - f; y += f){
            stroke(0);
            for (var i = 0; i < 16; i += 4){
                if (y % 500 == 0 && x % 500 == 0){
                    stroke(255,0,0);
                }
                line(x + i, y, x + i, y + 12);
            }
            line(x, y, x + 12, y + 12);
        }
    }

}
