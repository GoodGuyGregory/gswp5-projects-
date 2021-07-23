let sine;
let freq = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sine = new p5.SinOsc();
  // sine.start();

}

function increaseValue(initialValue) {
  while (initialValue <= 824) {
    initialValue += .00000004;
  }


  return initialValue;
}


function draw() {
  background(6, 157, 255);
  //  maps the mouseX value from 20Hz - 440Hz
  // 753-824 <-> 824-854

  let deltaValue = setInterval(increaseValue(753), 2000000);
  console.log(deltaValue);
  var hertz = map(deltaValue, 0, width, 20.0, 440.0);
  //  set the mouseX value to the hertz frequency
  sine.freq(hertz);
  //  Draw the sine wave:
  stroke(204);
  for (var x = 0; x < width; x++) {
    var angle = map(x, 0, width, 0, TWO_PI * hertz);
    var sinValue = sin(angle) * 320;
    stroke(202, 0, 252);
    line(x, 0, x, height / 2 + sinValue);
  }




}