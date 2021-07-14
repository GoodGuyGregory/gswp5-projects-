//  Variables:



function setup() {
    createCanvas(1980, 1020);

}

function draw() {
    background(204);
    //  draws two owls based on the function created
    // owl(110, 110);
    // owl(180, 110);

    //  DRAWS MANY OWLS: using the for loop for this purpose
    // for (var x = 35; x < width + 70; x += 70) {
    //     owl(x, 110);
    // }

    //  DRAWS A WHOLE ANIMAL KINGDOM OF OWLS: using the random variable elements and sizes
    // randomseed: stops the random numbders for some reason
    randomSeed(0);
    for (var i = 35; i < width + 40; i += 40) {
        //  uses int to round to a whole number with decimal truncation 
        var gray = int(random(0, 102));
        var scalar = random(0.25, 1.0);
        owlVariants(i, 110, gray, scalar);
    }

}

//  Creates an Owl Generation Function:
function owl(x, y) {
    // 
    push();
    //  translates an origin position based on the incoming parameters:
    translate(x, y);
    stroke(0);
    strokeWeight(70);
    //  Body of the owl
    line(0, -35, 0, -65);
    noStroke();
    fill(255);
    ellipse(-17.5, -65, 35, 35); // left eye
    ellipse(17.5, -65, 35, 35);  // right eye
    arc(0, -65, 70, 70, 0, PI); // chin
    fill(0);
    ellipse(-14, -65, 8, 8); // left eye
    ellipse(14, -65, 8, 8); // right eye
    quad(0, -58, 4, -51, 0, -44, -4, -51);
    pop();
}

function owlVariants(x, y, g, s) {
    push();
    translate(x, y);
    scale(s); //set the scale
    stroke(g);  // set the gray scale
    strokeWeight(70);
    line(0, -35, 0, -65);
    noStroke();
    fill(225 - g);
    ellipse(-17.5, -65, 35, 35); // left eye
    ellipse(17.5, -65, 35, 35);  // right eye
    arc(0, -65, 70, 70, 0, PI); // chin
    fill(g);
    ellipse(-14, -65, 8, 8); // left eye
    ellipse(14, -65, 8, 8); // right eye
    quad(0, -58, 4, -51, 0, -44, -4, -51);
    pop();
}