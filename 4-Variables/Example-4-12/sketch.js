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
    for (var y = 10; y < height - 20; y += 10) {
        //  horizontal action
        for (var x = 10; x <= width - 20; x += 10) {
            ellipse(x, y, 4, 4);
            // line to the center of the screen
            line(x, y, 240, 60);
        }

    }
}

