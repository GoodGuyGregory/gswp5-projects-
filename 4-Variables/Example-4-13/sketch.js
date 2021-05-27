//  Variables:


function setup() {
    createCanvas(1980, 1020);
    fill(255);
    stroke(102);
}

function draw() {
    background(0);
    // ellipse(x,y, width, height);
    // verticle
    for (var y = 30; y <= height; y += 8) {
        //  horizontal action
        for (var x = 12; x <= width - 20; x += 15) {
            ellipse(x + y, y, 15 - y / 20.0, 15 - y / 20.0);
        }

    }
}

