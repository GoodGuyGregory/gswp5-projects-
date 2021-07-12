//  Variables:
var angle = .75;
var offset = 660;
var scalar = 5;
var speed = 0.05;


function setup() {
    let colors = [];

    //  purple:
    let purpleNum = color(69, 21, 131);

    //  red:
    let redNum = color(190, 21, 20);

    //  blue:
    let blueNum = color(20, 50, 250);

    colors.push(purpleNum);
    colors.push(redNum);
    colors.push(purpleNum);

    createCanvas(1980, 1020);
    fill(255);
    stroke(colors[1]);
    background(204);
}


function draw() {
    //  display the framerate of the program
    // x = 700;
    // y = 400
    // cosine is responsible for the X value of the circular motion
    var xAngle = 660 + cos(angle) * scalar;
    //  sine is responsible for the Y value of the circular motion
    var yAngle = 350 + sin(angle) * scalar;

    ellipse(xAngle, yAngle, 15, 15);
    angle += speed;
    scalar += speed;

}