
//  Variables:
let gray = [];

function setup() {
    createCanvas(1980, 1020);
    //  for loop to populate the array to print
    for (let i = 0; i < width; i++) {
        //  random values between white and black
        gray[i] = random(0, 255);
    }

}

function draw() {
    //  white background
    background(255);
    //  for loop to display all of the items from the array


    for (let i = 0; i < gray.length; i++) {
        //  items 
        stroke(gray[i]);
        strokeWeight(random(1, 455));
        // line(x,y,x2,y2):
        line(i, 0, i, height);
    }


}

