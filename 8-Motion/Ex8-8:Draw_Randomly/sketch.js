//  Variables:

function setup() {
    createCanvas(1940, 1820);

}

function draw() {
    // PRINT RANDOMLY DRAWN  :
    // ================================
    background(204);
    for (var x = 20; x < innerWidth; x += 20) {
        //  change the MX for the variablility without the mouse
        var mx = mouseX / 10;
        var offsetA = random(-mx, mx);
        var offsetB = random(-mx, mx);
        // Random Color changes for the lines when it is in moition on the X axis
        // line(x1,y1,x2,y2);
        line(x + offsetA, 20, x - offsetB, 800);
    }

}