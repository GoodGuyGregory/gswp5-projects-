//  Variables:


function setup() {
    createCanvas(1980, 1020);
    background(204);

}

function draw() {
    push();
    translate(mouseX, mouseY);
    rect(0, 0, 30, 30);
    pop();
    translate(35, 10);
    rect(0, 0, 15, 15);
}