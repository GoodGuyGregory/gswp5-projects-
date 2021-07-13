//  Variables:
var angle = .75;
var offset = 660;
var scalar = 5;
var speed = 0.05;




function setup() {
    let colors = [];


    // RED PURPLE BLUE SET:
    // =========================================
    //  purple:
    let purpleNum = color(69, 21, 131);

    //  red:
    let redNum = color(190, 21, 20);

    //  blue:
    let blueNum = color(20, 50, 250);

    // colors.push(purpleNum);
    // colors.push(redNum);
    // colors.push(blueNum);


    //  Green, Yellow, Blue, Black, White
    //  Neon Green:
    let neonGreenNum = color(102, 255, 23);

    //  White:
    let whiteNum = color(255, 255, 255);

    //  Neon yellow:
    let neonYellowNum = color(255, 255, 38);


    //  Neon Blue:
    let neonBlueNum = color(0, 255, 255);

    //  Black:
    let blackNum = color(0, 0, 0);

    let neonPurpleNum = color(255, 0, 232);



    colors.push(blackNum);
    colors.push(whiteNum);
    colors.push(neonBlueNum);
    colors.push(neonGreenNum);
    colors.push(neonYellowNum);
    colors.push(neonPurpleNum);

    createCanvas(1980, 1020);
    // fill(255);


    function changeColor() {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
        stroke(randomColor);
        fill(randomColor);
    }

    setInterval(changeColor, 30);
    background(204);
}


function draw() {
    //  display the framerate of the program
    // x = 700;
    // y = 400
    // cosine is responsible for the X value of the circular motion
    var xAngle = 660 + cos(angle) * scalar;
    //  sine is responsible for the Y value of the circular motion
    var yAngle = 350 + sin(angle) * scalar;

    ellipse(xAngle, yAngle, 25, 25);
    angle += speed;
    scalar += speed;

}