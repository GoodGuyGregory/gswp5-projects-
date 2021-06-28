//  Variables:
var startX = 20; // Initial x coordinate
var stopX = 460; // Final X coordinate
var startY = 30; // initial y oc
var stopY = 400; // final y coordinate

//  position variables:
var x = startX;
var y = startY;
var step = 0.005;
var pct = 0.0;



function setup() {
    createCanvas(1240, 820);

}

function draw() {
    // CALCULARTE TWEENING:
    // ================================
    background(0);
    if (pct < 1.0) {
        x = startX + ((stopX - startX) * pct);
        y = startY + ((stopY - startX) * pct);
        pct += step;
    }
    ellipse(x, y, 20, 20);


}