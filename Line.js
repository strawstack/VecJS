const Vec = require('./Vec.js');
const Point = require('./Point.js');
const Circle = require('./Circle.js');

class Line {
    constructor(point, number) {
        // y − y1 = m (x − x1)
        this.point = point;
        this.slope = number;
    }
    intersect(line) {
        // Return intersection of lines as Point
        // y = mx + b
        // b = y - mx (calculate b for first line)
        // b = y - mx (calculate b for second line)
        // m1x + b1 = m2x + b2 (x is the only unknown)
        // m1x - m2x = b2 - b1
        // x(m1 - m2) = b2 - b1
        // x = (b2 - b1) / (m1 - m2) (find x)
        // y = mx + b (original eq, we find y)
        return new Point(x, y);
    }
    nearest(point) {
        // Return the closest point on the line to the given point
        return point.nearest(this);
    }
    adjecent() {
        // Return line through same point with adj slope
        return new Line(this.point, (-1 / this.slope));
    }
    through(point) {
        // Same slope but pass through point
        return new Line(point, this.slope);
    }
    slope(numOrVec) {
        // Same point but different slope
        if (typeof(numOrVec) === "number") {
            return new Line(this.point, numOrVec);
        } else if (numOrVec.constructor.name === "Vec") {
            return new Line(this.point, numOrVec.y/numOrVec.x);
        }
    }
    render(ctx) {
        // Render given a 2D context

    }
}
try {
    // Export as module for testing
    // and basic script tag for use
    module.exports = Line;
} catch(error) {

}
