//  Variables:

const { text } = require("body-parser");

function setup() {
    createCanvas(840, 1020);
    strokeWeight(12);
}

function draw() {
    background(204);
    stroke(102);
    line(mouseX, 60, mouseX, mouseY); // white line
    stroke(0);
    var mx = map(mouseX, 0, width, 60, 180);
    line(120, 69, mx, mouseY); // black line
}