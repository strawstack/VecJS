class Vec {
    constructor(x, y) {
        if (y === undefined) {
            // Single numebr passed in
            if (typeof(x) === "number") {
                this.x = x;
                this.y = x;

            // Object with x and y passed in
            } else {
                this.x = x.x;
                this.y = x.y;
            }

        // Two numbers passed in
        } else {
            this.x = x;
            this.y = y;
        }
    }

    //
    // Vector
    //
    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }
    add(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }
    _sub(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }
    _add(vec) {
        return new Vec(
            this.x + vec.x,
            this.y + vec.y
        );
    }
    angle(vec) {
        const d  = this.dot(vec);
        const m1 = this.magnitude();
        const m2 = vec.magnitude();
        return this._rad2Deg(Math.acos(d / (m1 * m2)));
    }
    project(vec) {
        const d = this.dot(vec);
        const mag = vec.magnitude();
        return vec.times( d / Math.pow(mag, 2) );
    }

    //
    // Scalar
    //
    times(value) {
        return new Vec(this.x * value, this.y * value);
    }

    //
    // Scalar and Vector
    //
    add(valueOrVec) {
        if (typeof(valueOrVec) === "number") {
            return new Vec(this.x + valueOrVec, this.y + valueOrVec);
        } else {
            return this._add(valueOrVec);
        }
    }
    sub(valueOrVec) {
        if (typeof(valueOrVec) === "number") {
            return new Vec(this.x - valueOrVec, this.y - valueOrVec);
        } else {
            return this._sub(valueOrVec);
        }
    }

    //
    // Self
    //
    magnitude() {
        return Math.sqrt(
            Math.pow(this.x, 2) + Math.pow(this.y, 2)
        );
    }
    normalize() {
        const mag = this.magnitude()
        return new Vec(
            this.x / mag,
            this.y / mag
        );
    }

    //
    // Helper
    //
    _rad2Deg(value) {
        return value / Math.PI * 180;
    }
    show() {
        return `{x: ${this.x}, y: ${this.y}}`;
    }
}
try {
    // Export as module for testing, but basic script tag for use
    module.exports = Vec;
} catch() { }

