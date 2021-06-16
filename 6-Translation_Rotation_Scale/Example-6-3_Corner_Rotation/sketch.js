//  Variables:

function setup() {
    createCanvas(1980, 920);
    background(204);

}

function draw() {

    //  creates a center ellipse
    ellipse(700, 310, 180, 180);
    //  creates rotation in radiants
    rotate(mouseX / 80.0);
    rect(1080, 430, 160, 20);
    rect(760, 430, 160, 20);
    rect(440, 430, 160, 20);
    rect(200, 430, 160, 20);



}