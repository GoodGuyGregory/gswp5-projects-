//  Variables:
var speed = 3;
let radius = 100;
let x;


function setup() {
    createCanvas(windowWidth, windowHeight);

    x = width / 2;
}

function draw() {
    background(50);

    let from = color('white');
    let to = color('black');
    let c = lerpColor(from, to, .1);
    fill(c);

    noStroke();
    //  x represents the boundaries
    circle(x, height / 2, radius * 2);

    x += speed;
    if (x < radius || x > width - radius) {
        speed *= -1;
    }


}

