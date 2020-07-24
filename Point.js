const Vec = require('./Vec.js');
const Line = require('./Line.js');
const Circle = require('./Circle.js');

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    line(point) {
        // Create a line given another point
        return new Line(this, point);
    }
    circle(radius) {
        // Create a circle from this point with the given radius
        return new Circle(this, radius);
    }
    nearest(lineOrCircle) {
        // Return the closest point on the line or circle
        const type = lineOrCircle.constructor.name;
        if (type === "Line") {
            const line = lineOrCircle;
            const adj = line.adjecent();
            const thru = adj.through(this);
            const inter = thru.intersect(line);
            return inter;

        } else if (type === "Circle") {

        }
    }
    distance(lineOrCircle) {
        // Distance to lineOrCircle
        const type = lineOrCircle.constructor.name;
        if (type === "Line") {
            const line = lineOrCircle;
            const near = this.nearest(line);
            const v1 = this.vec();
            const v2 = near.vec();
            const dist = v2.sub(v1).magnitude();
            return dist;

        } else if (type === "Circle") {

        }
    }
    vec() {
        // Return this point as Vec
        return new Vec(this.x, this.y);
    }
    render(ctx) {
        // Render given a 2D context

    }
}
Point.random = n => {
    let lst = [];
    for (let i = 0; i < n; i++) {
        lst.push(
            new Point(
                Math.random(),
                Math.random()
            )
        );
    }
    return lst;
};
try {
    // Export as module for testing
    // and basic script tag for use
    module.exports = Point;
} catch(error) {

}
