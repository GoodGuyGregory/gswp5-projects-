//  Variables:


function setup() {
    createCanvas(1980, 1020);
    strokeWeight(8);
}

function draw() {
    background(204);

    line()
    // Loops for the same lines:
    for (var i = 20; i < 400; i += 60) {
        line(i, 40, i + 60, 80);
    }
    for (var i = 40; i < 400; i += 60) {
        line(i, 40, i + 60, 80);
    }










}