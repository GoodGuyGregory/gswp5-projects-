
//  Variables:
var speed = 20.5;
var diameter;
var x;
var y;

function setup() {
    //  mac dimensions
    createCanvas(1440, 817);
    x = width / 2;
    y = height / 2;

    background(204);
}

function draw() {
    // PRINT SHAPES AND MOVE THEM RANDOMLY  :
    // ================================
    //  gives the x values of the coordinates as random values from the speed specified above
    x += random(-speed, speed);
    y += random(-speed, speed);
    diameter = random(-200, 200);
    c = color(random(0, 255), random(0, 255), random(0, 255));
    fill(c);
    ellipse(x, y, diameter, diameter);


}

