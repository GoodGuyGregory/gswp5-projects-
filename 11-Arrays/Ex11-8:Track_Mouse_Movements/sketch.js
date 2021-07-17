
//  Variables:
//  frames to be counted 
var num = 60;
let x = [];
let y = [];



function setup() {
    createCanvas(1980, 1020);
    noStroke();


    //  initialize the values of the array 
    for (let i = 0; i < num; i++) {
        x[i] = 0;
        y[i] = 0;
    }

}

function draw() {
    //  black background
    background(0);
    //  copy the array values from back to front:
    for (let i = num - 1; i > 0; i--) {
        x[i] = x[i - 1];
        y[i] = y[i - 1];
    }

    x[0] = mouseX; // set the first element of the array
    y[0] = mouseY; // set the first element of the array
    for (let i = 0; i < num; i++) {
        fill(i * 4);
        ellipse(x[i], y[i], 60, 60);
    }

}

