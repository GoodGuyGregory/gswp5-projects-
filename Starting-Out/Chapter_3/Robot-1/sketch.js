function setup() {
  createCanvas(720, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
  //  Establish Background color:
  background(204);


  // Neck:
  stroke(102);  // Set Stroke to Gray
  line(266, 257, 266, 162); //Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right

  // Antennae:
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium

  //  Body:
  noStroke();   // Disable stroke
  fill(102); // Set fill to gray
  ellipse(264, 377, 33, 33); // Antigravity orb
  fill(0); // Set fill to gray
  rect(219, 257, 90, 120); // main body
  fill(102);
  rect(219, 274, 90, 6); // Gray Stripe

  //  Head:
  fill(0);    // set fill to black
  ellipse(276, 155, 45, 45);  // head
  fill(255);   // set fill to white
  ellipse(288, 150, 14, 14); // large eye
  fill(0); // fill to black for pupil
  ellipse(288, 150, 3, 3); // pupil
  fill(153);
  ellipse(263, 148, 5, 5); //small eye 1
  ellipse(296, 130, 4, 4); //small eye 2
  ellipse(305, 162, 3, 3); //small eye 3
}
