let colors = [];

//  purple:
let purpleNum = 131;

//  red:
let redNum = 20;

//  blue:
let blueNum = 250;

colors.push(purpleNum);
colors.push(redNum);
colors.push(purpleNum);


function chooseColor() {
    i = Math.floor(Math.random() * 3);
    console.log(colors[i]);
}

setInterval(chooseColor, 130);

