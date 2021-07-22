let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  background(0);

  //  COLOR Functionality:
  // =======================================
  let colors = [];

  //  Neon Purple:
  let neonPurpleNum = color(255, 0, 232);

  //  Neon Blue:
  let neonBlueNum = color(0, 255, 255);

  //  Neon yellow:
  let neonYellowNum = color(255, 255, 38);

  colors.push(neonPurpleNum);
  colors.push(neonBlueNum);
  colors.push(neonYellowNum);

  function changeColor() {
    randomColor = colors[Math.floor(Math.random() * colors.length)];
    fill(randomColor);
  }


}



function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
  //  getLevel replaces the amplitude 
  // getLevel() method returns values between 0 and 1, 
  //  map() is used to convert the values to larger numbers
  // map(inputDeterminate, <lowestValue>, <scale sensitivity>, <highestValue>, )
  scale = map(mic.getLevel(), 0, .5, 10, width);
  //  draw a circle based on the volume
  fill(255);
  ellipse(width / 2, height / 2, scale, scale);

}