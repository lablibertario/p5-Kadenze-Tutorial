var DEBUGGING = true;
// Game states
var level = 1;
var maxLevels = 5;
var score = 0;
var game_states = [
    "INTRO_STATE",
    "IN_LEVEL",
    "STAGING",
    "GAME_OVER"
];
var game_state;
var stateMillis;
// Paddle vars
var paddle;
var paddleWidth = 80;
var paddleHeight = 25;
// Pellet vars
var startPellets = 10;
var pellets = [];
var minFallRate = 0.5;
var maxFallRate = 3.0;
// Display
var topBarHeight = 30;
var tSize = 18;

function setup() {
    createCanvas(windowWidth, windowHeight);
    game_state = "INTRO_STATE";
}

function draw() {
    background(0);
    if (DEBUGGING) {
        console.log(game_state);
    }
    if (game_state == "INTRO_STATE"){
        textSize(tSize * 2);
        var introMsg = "BALL DROPPA \n\n Smaller balls are worth more points."
        fill(255);
        textAlign(CENTER, CENTER);
        text(introMsg, 0, 0, width, height);
        if (millis() > 3000){
            game_state = "STAGING";
            stateMillis = millis();
            if (DEBUGGING){
                console.log("Change state", millis());
            }
        }
    } else if (game_state == "STAGING") {
        if (level <= maxLevels) {
            setupLevel();
            var stagingMsg = "LEVEL " + level;
            textSize(tSize * 2);
            fill(255);
            textAlign(CENTER, CENTER);
            text(stagingMsg, 0, 0, width, height);

            if (millis() > stateMillis + 1500){
                game_state = "IN_LEVEL";
                stateMillis = millis();
                console.log(level);
            }
        } else if (level > maxLevels) {
            if (DEBUGGING){
                console.log(level, game_state);
            }
            game_state = "GAME_OVER";
        }
    } else if (game_state == "IN_LEVEL") {
        updateFrame();
        // Fresh pellet
        // pellets[pellets.length] = new Pellet();
        pelletHandler();
        paddle.updatePaddle();
    } else if (game_state == "GAME_OVER") {
        var goMessage = "GAME OVER"
        var goScore = "YOUR SCORE: " + score
        var endGameMsg = goMessage + "\n" + goScore;
        fill(255);
        textSize(tSize*2);
        textAlign(CENTER, CENTER);
        text(endGameMsg, 0, 0, width, height);
    } else {
        // should never happen
        if (DEBUGGING){
            console.log(game_state);
        }
    }

}

function Paddle(w, h) {
    // dimensions
    this.w = w;
    this.h = h;
    this.x = width / 2 - this.w / 2; // initialize centered
    this.y = height - 50;
    this.states = [
        "NORMAL_STATE",
        "CATCH_STATE"
    ]
    this.state = "NORMAL_STATE"
    // movement
    this.step = 5; // essentially the responsiveness of the moving paddle.

    this.updatePaddle = function() {
        // color
        if (this.state == "NORMAL_STATE") {
            this.r = 255;
            this.g = 0;
            this.b = 0;
        } else if (this.state == "CATCH_STATE") {
            this.r = 255;
            this.g = 255;
            this.b = 255;
            this.state = "NORMAL_STATE";
        }
        fill(this.r, this.g, this.b);
        noStroke();

        // movement
        if (keyIsDown(LEFT_ARROW) && paddle.x > paddle.step) {
            paddle.x -= paddle.step;
        } else if (keyIsDown(RIGHT_ARROW) && paddle.x < width - paddle.w - paddle.step) {
            paddle.x += paddle.step;
        }

        //create
        rect(this.x, this.y, this.w, this.h);
    }
}

function Pellet() {
    // dimensions
    this.d = random(7, 30);
    this.r = this.d/2;
    this.x = random(this.r, width - this.r);
    this.y = topBarHeight + this.r;
    // color
    this.r1 = random(255);
    this.g1 = random(255);
    this.b1 = random(255);
    this.r2 = random(255);
    this.g2 = random(255);
    this.b2 = random(255);
    // movement
    this.fallRate = random(minFallRate, maxFallRate);
    // points
    this.pointValue = round(30 / this.d);
    this.wasCaught = false;

    this.updatePellet = function() {
        if (this.wasCaught == true){
            this.r1 = 0;
            this.g1 = 0;
            this.b1 = 0;
            this.r2 = 0;
            this.g2 = 0;
            this.b2 = 0;
        }
        fill(this.r1, this.g1, this.b1);
        stroke(this.r2, this.g2, this.b2);
        strokeWeight(2);
        ellipse(this.x, this.y, this.d, this.d);
    }

    this.catchCheck = function() {
        if (
            this.x - this.r >= paddle.x  &&
            this.x + this.r <= paddle.x + paddle.w &&
            this.y + this.r <= paddle.y &&
            this.y + this.r > paddle.y - this.fallRate &&
            this.wasCaught == false
            ) {
                this.wasCaught = true;
                score += this.pointValue;
                paddle.state = "CATCH_STATE";

                if (DEBUGGING) {
                    console.log("score = ", score);
                }
            }
    }
}

function pelletHandler(){
    // Handle pellet movement and trigger level end when all pellets are off screen
    var checks = 0;
    for (i = 0; i < pellets.length; i++) {
        if (pellets[i].y < height) {
            pellets[i].y += pellets[i].fallRate;
            pellets[i].updatePellet();
            pellets[i].catchCheck();
        } else {
            checks += 1;
        }
    }
    if (checks == pellets.length){
        levelOver();
    }
}

function levelOver(){
    level++;
    stateMillis = millis();
    paddle.x = width / 2 - paddle.w / 2
    game_state = "STAGING";
}

function setupLevel() {
    if (level == 1){
        paddle = new Paddle(paddleWidth, paddleHeight);
    }
    for (i = 0; i < startPellets; i++) {
        pellets[i] = new Pellet();
    }
}

function updateFrame() {
    background(0);
    // bar
    fill(255, 0, 0);
    rect(0, 0, width, topBarHeight);
    // text
    textSize(tSize);
    textAlign(LEFT);
    var s = "Level: " + level + "  Score: " + score;
    fill(255);
    text("Level: " + level + "  Score: " + score, 20, 20);
}
