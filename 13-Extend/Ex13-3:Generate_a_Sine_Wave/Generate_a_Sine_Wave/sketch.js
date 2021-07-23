let sine;
let freq = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sine = new p5.SinOsc();
  sine.start();

}



function draw() {
  background(0);
  //  maps the mouseX value from 20Hz - 440Hz
  var hertz = map(mouseX, 0, width, 20.0, 440.0);
  //  set the mouseX value to the hertz frequency
  sine.freq(hertz);

  //  Draw the sine wave:
  stroke(204);
  for (var x = 0; x < width; x++) {
    var angle = map(x, 0, width, 0, TWO_PI * hertz);
    var sinValue = sin(angle) * 120;
    line(x, 0, x, height / 2 + sinValue);
  }

}