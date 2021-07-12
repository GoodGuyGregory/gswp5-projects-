//  Variables:
var angle = 0.0;
var offset = 360;
var scalar = 30;
var speed = 0.05;

function setup() {
    createCanvas(1980, 1020);
    background(204);

}

function draw() {
    //  display the framerate of the program
    // cosine is responsible for the X value of the circular motion
    var x = offset + cos(angle) * scalar;
    //  sine is responsible for the Y value of the circular motion
    var y = offset + sin(angle) * scalar;

    ellipse(x, y, 40, 40);
    angle += speed;

}