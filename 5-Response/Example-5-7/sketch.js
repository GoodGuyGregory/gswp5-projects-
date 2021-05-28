//  Variables:


function setup() {
    createCanvas(1980, 1020);
    stroke(0, 102);
}

function draw() {
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    //  established from the distance calculations
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);

}