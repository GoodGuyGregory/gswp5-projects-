//  Variables:


function setup() {
    createCanvas(1980, 1020);
    strokeWeight(8);
}

function draw() {
    background(204);

    // line(x1,y1,x2,y2);
    // Loops for the same lines:
    stroke(25, 0, 254);
    for (var i = 20; i < 400; i += 20) {
        line(i, 40, i + 80, 80);
    }

    stroke(254, 0, 25);
    for (var i = 120; i < 600; i += 30) {
        line(i, 90, i - 80, 180);
    }


    for (var i = 30; i < 400; i += 60) {
        line(i, 220, i + 60, 360);
    }











}