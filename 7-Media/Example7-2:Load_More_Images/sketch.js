//  Variables:
var img1;
var img2;

//  create a function to load the image:
function preload() {
    img1 = loadImage("lunar.jpg");
    img2 = loadImage("capsule.jpg");
}

function setup() {
    createCanvas(800, 120);

}

function draw() {
    //  Draw the image onto the screen
    //  there are optional 4th and 5th arguments to image which manipulate the width, and height
    image(img1, 130, 0, 240, 120);
    image(img2, 300, 0, 240, 120);
}