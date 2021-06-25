//  Variables:
var img;

//  create a function to load the image:
function preload() {
    img = loadImage("lunar.jpg");
}

function setup() {
    createCanvas(1980, 1020);

}

function draw() {
    //  Draw the image onto the screen
    //  there are optional 4th and 5th arguments to image which manipulate the width, and height
    image(img, 0, 0, 1900, 800);
}