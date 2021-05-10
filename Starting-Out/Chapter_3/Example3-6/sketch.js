function setup() {
    createCanvas(1980, 1020);
}

function draw() {
    //  Create an Ellipse Scene:
    // ellipse(x,y,width,height)
    background(204);
    ellipse(278, -100, 400, 400);
    ellipse(840, 340, 200, 200);
    ellipse(940, 640, 400, 400);
    // This Ellipse is overlapping  because it's code comes after the previous one
    ellipse(1140, 640, 300, 300);
    ellipse(580, 540, 100, 100);




}