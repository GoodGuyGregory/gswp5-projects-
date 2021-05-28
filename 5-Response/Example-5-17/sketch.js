//  Variables:

const { text } = require("body-parser");

function setup() {
    createCanvas(1980, 1020);
    // establishes text size
    textSize(64);
    // adds text to the center of the screen
    textAlign(CENTER);

}

function draw() {
    background(0);
    if (keyIsPressed) {
        fill(255);
        text(key, 60, 80);
    }
}