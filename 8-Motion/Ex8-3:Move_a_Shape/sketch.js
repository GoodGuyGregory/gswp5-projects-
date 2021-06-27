

//  Variables:
var radius = 140;
var x = -radius;
var speed = 0.5;

function setup() {
    createCanvas(1240, 820);
    ellipseMode(RADIUS);

}

function draw() {
    //  background is placed here to create a redrawling of the image
    background(0);
    //  increase the value of x
    x += speed;
    arc(x, 360, radius, radius, 0.52, 5.76);
}