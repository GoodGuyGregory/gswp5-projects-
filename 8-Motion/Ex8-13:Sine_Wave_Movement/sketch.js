//  Variables:
var angle = 0.0;
var offset = 470;
var scalar = 160;
var speed = 0.05;

function setup() {
    createCanvas(1980, 1020);

}

function draw() {
    background(0);
    // Iterate through theses to fill the screen
    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    var y4 = offset + sin(angle + 0.12) * scalar;
    var y5 = offset + sin(angle + 0.8) * scalar;

    //  iterate through these to add them to the screen
    let boundary = width - 100
    // for (let x = 80; x < boundary; x += 40) {
    //     ellipse(x, offset, 80, 80);
    // }

    //  Check 
    let x = 80;
    let count = 0;
    let angleDelta = 0.4;
    while (count <= boundary) {
        fill(color(120, 255, 120));
        if (count == 0 || count == boundary) {
            var initialAngle = offset + sin(angle) * scalar;
            // fill(color(255, 0, 0));
            ellipse(x, initialAngle, 80, 80);
        }
        else {
            var deltaAngle = offset + sin(angle + angleDelta) * scalar;
            // fill(color(255, 255, 255));
            ellipse(x, deltaAngle, 80, 80);
            angleDelta += 0.4;

            // fill(color(255, 255, 255));
            // ellipse(x, y2, 80, 80);
        }
        x += 40;
        count += 40;
    }
    //  TODO:
    // =========================
    //  Set Constraints for the offset, of the Wave to bounce back to the higher section gradually:





    // ellipse(80, y1, 80, 80);
    // ellipse(120, y2, 80, 80);
    // ellipse(160, y3, 80, 80);
    // ellipse(200, y4, 80, 80);
    // ellipse(240, y5, 80, 80);
    angle += speed;
}