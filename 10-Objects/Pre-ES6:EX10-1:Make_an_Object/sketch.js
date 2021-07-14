//  Variables:

//  creates a hoisted variable
var bug;


function setup() {
    createCanvas(1980, 1020);
    //  placed here to prevent redrawling of the canvas
    background(204);
    //  creates object and pass in parameters
    bug = new JitterBug(width / 2, height / 2, 60);

}

function draw() {
    //  calls the methods of the Jitterbug object below
    bug.move();
    bug.display();
}

//  jitterbug constructor:
//  define object
function JitterBug(tempX, tempY, tempDiameter) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 2.5;

    //  object methods
    this.move = function () {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };

    this.display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
}