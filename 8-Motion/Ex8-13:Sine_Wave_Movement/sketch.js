//  Variables:
var angle = 0.0;
var offset = 470;
var scalar = 160;
var speed = 0.05;

function setup() {
    createCanvas(1980, 1020);

}

function draw() {
    background(0);
    // Iterate through theses to fill the screen
    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    var y4 = offset + sin(angle + 0.12) * scalar;
    var y5 = offset + sin(angle + 0.8) * scalar;

    //  iterate through these to add them to the screen
    let boundary = width - 100
    for (let x = 80; x < boundary; x += 40) {
        ellipse(x, offset, 80, 80);


    }
    // ellipse(80, y1, 80, 80);
    // ellipse(120, y2, 80, 80);
    // ellipse(160, y3, 80, 80);
    // ellipse(200, y4, 80, 80);
    // ellipse(240, y5, 80, 80);
    angle += speed;
}