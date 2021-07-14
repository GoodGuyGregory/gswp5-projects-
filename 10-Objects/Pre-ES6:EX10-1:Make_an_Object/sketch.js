//  Variables:



function setup() {
    createCanvas(1980, 1020);

}

function draw() {
    background(204);
    //  translates the origin from 0,0 to 110,110
    translate(110, 110);
    stroke(0);
    strokeWeight(70);
    //  Body of the owl
    line(0, -35, 0, -65);
    noStroke();
    fill(255);
    ellipse(-17.5, -65, 35, 35); // left eye
    ellipse(17.5, -65, 35, 35);  // right eye
    arc(0, -65, 70, 70, 0, PI); // chin
    fill(0);
    ellipse(-14, -65, 8, 8); // left eye
    ellipse(14, -65, 8, 8); // right eye
    quad(0, -58, 4, -51, 0, -44, -4, -51);
}