const Vec = require('./Vec.js');
const Point = require('./Point.js');
const Line = require('./Line.js');

class Circle {
    constructor(point, number) {
        this.point = point;
        this.radius = number;
    }
    nearest(pointOrLine) {
        // The point on the circle nearest to the given point or line

    }
    render(ctx) {
        // Render given a 2D context

    }
}
try {
    // Export as module for testing
    // and basic script tag for use
    module.exports = Circle;
} catch(error) {

}
