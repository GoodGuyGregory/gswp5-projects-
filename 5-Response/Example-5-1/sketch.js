//  Variables:
var x = 280;
var y = -100;
var diameter = 380;

function setup() {
    createCanvas(1980, 1020);
    fill(102);
}

function draw() {
    background(204);

    ellipse(x, frameCount, diameter, diameter);

}