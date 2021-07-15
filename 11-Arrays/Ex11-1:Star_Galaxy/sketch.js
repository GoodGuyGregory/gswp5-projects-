
//  Variables:
let x = [];


function setup() {
    createCanvas(1980, 1020);
    noStroke();
    fill(255, 200);
    //  for loop to populate the array to print
    for (let i = 0; i < 15000; i++) {
        //  adds a random number between -1000, and 200
        x[i] = random(-1000, 1500);
    }
}

function draw() {
    //  black background
    background(0);
    //  for loop to display all of the items from the array
    for (let i = 0; i < x.length; i++) {
        x[i] += 0.5;
        var y = i * 0.4;
        ellipse(x[i], y, 5, 5);
    }
}
