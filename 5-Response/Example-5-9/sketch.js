//  Variables:
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;



function setup() {
    createCanvas(1980, 1020);
    stroke(0, 102);
}

function draw() {
    var targetX = mouseX;
    //  eases the positional value
    x += (targetX - x) * easing;
    var targetY = mouseY;
    //  eases the positional value
    y += (targetY - y) * easing;
    var weight = dist(x, y, px, py);
    //  established from the distance calculations
    strokeWeight(weight);
    line(x, y, px, py);
    py = y;
    px = x;

}