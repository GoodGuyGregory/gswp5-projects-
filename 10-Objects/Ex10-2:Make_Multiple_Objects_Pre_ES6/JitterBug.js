//  jitterbug constructor:
//  define object
function JitterBug(tempX, tempY, tempDiameter) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 2.5;

    //  object methods
    this.move = function () {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };

    this.display = function () {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    };
}