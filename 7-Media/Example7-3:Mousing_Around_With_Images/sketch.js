//  Variables:
var img;


//  create a function to load the image:
function preload() {
    img = loadImage("lunar.jpg");
}

function setup() {
    background(0);
    createCanvas(1900, 1200);

}

function draw() {
    //  Draw the image onto the screen
    //  there are optional 4th and 5th arguments to image which manipulate the width, and height
    image(img, 0, 0, mouseX * 2, mouseY * 2);
}