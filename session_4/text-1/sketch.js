function setup() {
    createCanvas(windowWidth,windowHeight);
    textFont("Arial");
    textSize(24);
}

function draw() {
    background(255);
    if (mouseX < 100){
        fill(mouseX);
        text("Sup motherfucker", mouseX, mouseY);
    } else if (mouseX >100 && mouseX < 500){
        fill(0, map(mouseX,0,500,0,255), 0);
        text("Who's a \ngood boy", mouseX, mouseY);
    } else {
        fill(0, 0, map(mouseX,500,width,0,255));
        text("this is a long ass text box isn't it gorgeous? Wacka Flocka Flame.", mouseX, mouseY, 200);
    }

}
