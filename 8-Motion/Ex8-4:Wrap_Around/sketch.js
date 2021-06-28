

//  Variables:
var radius = 40;
var x = -radius;
var speed = 0.5;


function setup() {
    createCanvas(1980, 1020);
    ellipseMode(RADIUS);
}

function draw() {

    // WRAP TECHNIQUE:
    // ======================================
    //  background is placed here to ensure that the image is drawn again each frame 
    //  refresh
    background(0);
    x += speed;
    if (x > width + radius) { // if the item goes off the screen boundary
        //  reset the value of X to have the image repeat
        x = -radius;

    }
    // ======================================

    arc(x, 60, radius, radius, 0.52, 5.76);
    arc(x, 160, radius, radius, 0.52, 5.76);
    arc(x, 260, radius, radius, 0.52, 5.76);
    arc(x, 360, radius, radius, 0.52, 5.76);
    arc(x, 460, radius, radius, 0.52, 5.76);
    arc(x, 560, radius, radius, 0.52, 5.76);
}