//  Variables:
var angle = 0.0;


function setup() {
    createCanvas(1980, 1020);

}

function draw() {
    var sinval = sin(angle);
    print(sinval);
    // map will set the values expressed into another value based on a range 
    //  previously specified
    var gray = map(sinval, -1, 1, 0, 255);
    background(gray);
    angle += 0.1;
}