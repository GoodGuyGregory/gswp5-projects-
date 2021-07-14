//  Variables:

//  creates a hoisted variable
var bug;


function setup() {
    createCanvas(1980, 1020);
    //  placed here to prevent redrawling of the canvas
    background(204);
    //  creates object and pass in parameters
    jit = new JitterBug(width * 0.33, height / 2, 120);
    bug = new JitterBug(width * 0.64, height / 2, 60);

}

function draw() {
    //  calls the methods of the Jitterbug object below


    jit.move();
    jit.display();

    bug.move();
    bug.display();
}

