//  Variables:

let stats;

//  function created to ensure that the data is fully loaded before it is manipulated
function preLoad() {
    // uses the p5.Table constructor  method loadTable
    stats = loadTable('ortiz.csv');
    print('loaded');
}


function setup() {
    createCanvas(1980, 1020);
    preLoad();
    for (let i = 0; i < stats.getRowCount(); i++) {
        //gets the values from row i, column 0 in the file
        var year = stats.get(i, 0);
        //  attaches the homeruns to the next value in the row for column i 
        var homeRuns = stats.get(i, 1);

        var rbi = stats.get(i, 2);
        var average = stats.get(i, 3);

        print('Text');
    }

}

function draw() {

}
