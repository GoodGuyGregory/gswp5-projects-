//  Variables:


function setup() {
    createCanvas(1980, 1020);
    strokeWeight(6);
}

function draw() {
    background(30);

    // line(x1,y1,x2,y2);
    // Loops for the same lines:
    stroke(300, 160, 94);
    for (var y = 0; y <= height; y += 40) {
        for (var x = 0; x <= width; x += 40) {
            fill(225, 140);
            ellipse(x, y, 40, 40);
        }
    }










}