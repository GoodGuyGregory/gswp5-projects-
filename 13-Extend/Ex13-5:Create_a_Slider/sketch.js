//  holds the variable for the slider
let slider;

function setup() {
    colorMode(HSB);
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, 360, 60, 40);
    slider.position(20, 20);


}

function draw() {
    let val = slider.value();
    background(val, 100, 100, 1);
}