//  Variables:
var angle = 0.0;

function setup() {
    createCanvas(1980, 1020);
    background(204);
    //  amount of time that the change will need to take place
    setInterval(changeColor, 40);

}

//  function to be called that will change the color 
function changeColor() {
    stroke(255);
    fill(0);
    rect(125, 125, 60, 60);
    rect(-15, -15, 30, 30);
    rect(115, -25, 40, 40);
}

function draw() {


    translate(mouseX, mouseY);
    rotate(angle);
    stroke(0);
    fill(255);
    rect(125, 125, 60, 60);
    rect(-15, -15, 30, 30);
    rect(115, -25, 40, 40);
    angle += 0.1;
}
