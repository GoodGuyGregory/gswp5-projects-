
//  Variables:
var speed = 60.5;
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
    //  ESTABLISH CONSTRAINTS FOR YOUR IMAGES:
    // ============================================
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    diameter = random(-200, 80);
    // color(r,g,b;)
    c = color(random(0, 105), random(0, 25), random(0, 255));
    fill(c);
    ellipse(x, y, diameter, diameter);


}

