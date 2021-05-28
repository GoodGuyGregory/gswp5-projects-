//  Defined Variables
var x = 60;
var y = 440;
var bodyHeight = 160;
var neckHeight = 70;
var radius = 45;
var easing = 0.04;



function setup() {
    createCanvas(720, 480);
    strokeWeight(2);
    ellipseMode(RADIUS);
}

function draw() {

    var targetX = mouseX;
    x += (targetX - x) * easing;

    if (mouseIsPressed) {
        neckHeight = 16;
        bodyHeight = 90;
    } else {
        neckHeight = 70;
        bodyHeight = 160;
    }

    var neckY = y - bodyHeight - neckHeight - radius;
    //  Establish Background color:
    background(204);


    // Neck:
    stroke(102);  // Set Stroke to Gray
    line(x + 12, y - bodyHeight, x + 12, neckY); // Middle

    // Antennae:
    line(x + 12, neckY, x - 18, neckY - 43); // Small
    line(x + 12, neckY, x + 42, neckY - 99); // Tall
    line(x + 12, neckY, x + 78, neckY + 15); // Medium

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
    ellipse(x + 12, neckY, radius, radius);  // head
    fill(255);   // set fill to white
    ellipse(x + 24, neckY - 6, 14, 14); // large eye
    fill(0); // fill to black for pupil
    ellipse(x + 24, neckY - 6, 3, 3); // pupil
    fill(153);
    ellipse(x, neckY - 8, 5, 5); //small eye 1
    ellipse(x + 30, neckY - 26, 4, 4); //small eye 2
    ellipse(x + 41, neckY + 6, 3, 3); //small eye 3
}
