const Vec = require('./Vec.js');
const Point = require('./Point.js');
const Line = require('./Line.js');
const Circle = require('./Circle.js');

function main() {

    const a = new Vec(1, 2);
    const b = new Vec(3, 4);
    const c = new Vec(0, 2);
    const d = new Vec(2, 0);
    console.log(`a: ${a.show()}`);
    console.log(`b: ${b.show()}`);
    console.log(`c: ${c.show()}`);
    console.log(`d: ${d.show()}`);

    console.log(
        `a dot b = ${a.dot(b)}`
    );

    console.log(
        `a add b = ${a.add(b).show()}`
    );

    console.log(
        `a sub b = ${a.sub(b).show()}`
    );

    console.log(
        `c angle d = ${c.angle(d)}`
    );

    // {1.32, 1.76}
    console.log(
        `a proj onto b = ${a.project(b).show()}`
    );

    console.log(
        `a times scalar(3) = ${a.times(3).show()}`
    );

    console.log(
        `a add scalar(3) = ${a.add(3).show()}`
    );

    console.log(
        `a sub scalar(3) = ${a.sub(3).show()}`
    );

    console.log(
        `a magnitude = ${a.magnitude()}`
    );

    console.log(
        `b normalize = ${b.normalize().magnitude()}`
    );

    console.log(
        `_rad2Deg(2 * Math.PI) = ${a._rad2Deg(2 * Math.PI)}`
    );
}

main();
