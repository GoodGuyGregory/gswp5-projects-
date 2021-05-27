//  Defined Variables
var x = 60;
var y = 420;
var bodyHeight = 110;
var neckHeight = 140;
var radius = 45;
var ny = y - bodyHeight - neckHeight - radius;



function setup() {
    createCanvas(720, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);
}

function draw() {
    //  Establish Background color:
    background(204);


    // Neck:
    stroke(102);  // Set Stroke to Gray
    line(x + 2, y - bodyHeight, x + 2, ny); //Left
    line(x + 12, y - bodyHeight, x + 12, ny); // Middle
    line(x + 22, y - bodyHeight, x + 22, ny); // Right

    // Antennae:
    line(x + 12, ny, x - 18, ny - 43); // Small
    line(x + 12, ny, x + 42, ny - 99); // Tall
    line(x + 12, ny, x + 78, ny + 15); // Medium

    //  Body:
    noStroke();   // Disable stroke
    fill(102); // Set fill to gray
    ellipse(x, y - 33, 33, 33); // Antigravity orb
    fill(0); // Set fill to gray
    rect(x - 45, y - bodyHeight, 90, bodyHeight - 33); // main body
    fill(102);
    rect(x - 45, y - bodyHeight + 17, 90, 6); // Gray Stripe

    //  Head:
    fill(0);    // set fill to black
    ellipse(x + 12, ny, radius, radius);  // head
    fill(255);   // set fill to white
    ellipse(x + 24, ny - 6, 14, 14); // large eye
    fill(0); // fill to black for pupil
    ellipse(x + 24, ny - 6, 3, 3); // pupil
    fill(153);
    ellipse(x, ny - 8, 5, 5); //small eye 1
    ellipse(x + 30, ny - 26, 4, 4); //small eye 2
    ellipse(x + 41, ny + 6, 3, 3); //small eye 3
}
