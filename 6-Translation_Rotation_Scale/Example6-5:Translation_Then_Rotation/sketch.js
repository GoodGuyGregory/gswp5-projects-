//  Variables:
var angle = 0.0;

function setup() {
    createCanvas(1980, 1020);
    background(204);

}

function draw() {
    translate(mouseX, mouseY);
    rotate(angle);
    rect(125, 125, 60, 60);
    rect(-15, -15, 30, 30);
    rect(115, -25, 40, 40);
    angle += 0.1;
}