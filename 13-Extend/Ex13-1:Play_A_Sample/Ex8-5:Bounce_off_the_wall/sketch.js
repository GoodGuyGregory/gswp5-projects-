

//  Variables:
var radius = 100;
var x = 110;
var speed = 0.5;
var direction = 1;

function setup() {
    createCanvas(1240, 820);
    ellipseMode(RADIUS);

}

function draw() {
    // BOUNCE LOGIC BELOW:
    // ================================
    //  background is placed here to create a redrawling of the image
    background(0);
    //  increase the value of x and note direction
    x += speed * direction;
    //  direction logic for boundaries:
    if ((x > width - radius) || (x < radius)) {
        direction = -direction; // flip the direction
    }

    //  if the direction is changed then the direction of the pacman must also change
    if (direction == 1) {
        arc(x, 360, radius, radius, 0.52, 5.76);
    } else {
        arc(x, 360, radius, radius, 3.67, 8.9);
    }

}