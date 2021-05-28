//  Variables:

const { text } = require("body-parser");

function setup() {
    createCanvas(1980, 1020);
    strokeWeight(12);
}

function draw() {
    background(204);
    stroke(102);
    line(mouseX, 0, mouseX, height); // gray line
    line(0, mouseY, width, mouseY); // gray line
    stroke(0);
    var mx = mouseX / 2 + 60;
    var my = mouseY / 2 + 60;
    line(mx, 0, mx, height);
    line(0, my, width, my);
}