//  Variables:
var img;


//  create a function to load the image:
function preload() {
    img = loadImage("robot1.svg");
}

function setup() {
    createCanvas(1480, 1020);

}

function draw() {
    //  Draw the image onto the screen
    //  there are optional 4th and 5th arguments to image which manipulate the width, and height
    background(204);
    image(img, 0, 0);
    image(img, 0, mouseY * -1);

}