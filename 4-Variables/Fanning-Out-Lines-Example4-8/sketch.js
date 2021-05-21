//  Variables:


function setup() {
    createCanvas(1980, 1020);
    strokeWeight(8);
}

function draw() {
    background(204);

    // line(x1,y1,x2,y2);
    // Loops for the same lines:
    stroke(300, 60, 254);
    for (var i = 10; i < 800; i += 30) {
        line(i, 0, i + i / 2, 100);
    }











}