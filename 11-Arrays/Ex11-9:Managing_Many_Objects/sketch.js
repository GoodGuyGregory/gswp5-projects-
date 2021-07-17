//  Variables:

//  creates a hoisted variable
var bugs = [];


function setup() {
    createCanvas(1980, 1020);
    //  placed here to prevent redrawling of the canvas
    background(204);
    for (let i = 0; i < 55; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 80);
        //  fill the array in the index position with a new Jitterbug object
        bugs[i] = new JitterBug(x, y, r);
    }

}

function draw() {
    //  calls the methods of the Jitterbug objects
    for (let i = 0; i < bugs.length; i++) {
        // call the move method for the bug object that is at that position
        bugs[i].move();
        bugs[i].display();
    }
}

