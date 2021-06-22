//  Variables:
var angle = 0.0;

function setup() {
    createCanvas(1980, 1020);


}

function draw() {
    background(204);
    stroke(0);
    rotate(angle);
    translate(mouseX, mouseY);
    rect(-15, -15, 90, 90);
    fill(0);
    rect(-15, -15, 90, 90);
    angle += 0.5;
}