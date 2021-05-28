//  Variables:

function setup() {
    createCanvas(1980, 1020);
    strokeWeight(30);
}

function draw() {
    background(204);
    stroke(102);
    if (mouseIsPressed == false) {
        stroke(0);
    }
    line(200, 0, 290, height);
    line(0, 200, width, 90);
    line(0, 600, width, 290);
    if (mouseIsPressed == true) {
        stroke(0);
    }
    line(500, 0, 90, height);
    line(500, 0, 90, height);
    line(800, 0, 690, height);
    line(0, 300, width, 90);
}