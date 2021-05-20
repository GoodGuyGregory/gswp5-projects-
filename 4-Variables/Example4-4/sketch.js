//  Variables:
var x = 25;
var h = 60;
var y = 25;

function setup() {
    createCanvas(1980, 1020);
}

function draw() {
    background(204);
    x = 20;
    rect(x, y, 400, h); //Top
    x = x + 100;
    rect(x, y + h, 400, h); //middle
    x = x - 250;
    rect(x, y + h * 2, 300, h); // Bottom











}