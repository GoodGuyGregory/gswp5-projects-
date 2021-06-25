//  Variables:
var angle = 0.0;

function setup() {
    createCanvas(1980, 1020);
    background(204);

}

function draw() {
    rotate(angle);
    translate(mouseX, mouseY);
    rect(-15, -15, 90, 90);
    angle += 0.5;
}