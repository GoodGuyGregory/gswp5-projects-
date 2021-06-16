//  Variables:

function setup() {
    createCanvas(1980, 1020);
    background(204);

}

function draw() {
    translate(mouseX, mouseY);
    rect(0, 0, 30, 30);
    translate(15, 30);
    rect(0, 0, 40, 45);
    translate(25, 30);
    rect(0, 0, 60, 60);
    translate(36, mouseY);
    rect(0, 0, 70, 20);
}