const multiply = require("./program.js");
const assert = require("chai").assert;

describe("multiply", function() {
    it("returns the correct result for positive integers", function() {
        assert.equal(multiply(2, 3), 6);
        assert.equal(multiply(7, 4), 28);
    });

    it("handles zero as either operand", function() {
        assert.equal(multiply(0, 5), 0);
        assert.equal(multiply(9, 0), 0);
    });

    it("supports negative numbers", function() {
        assert.equal(multiply(-2, 3), -6);
        assert.equal(multiply(-2, -3), 6);
    });

    it("works with decimal numbers", function() {
        assert.closeTo(multiply(1.5, 2.5), 3.75, 0.0001);
    });

    it("handles very large numbers", function() {
        assert.equal(multiply(1_000_000, 2_000_000), 2_000_000_000_000);
    });

    it("keeps precision for fractional inputs", function() {
        assert.closeTo(multiply(0.1, 0.2), 0.02, 0.0000000001);
    });

    it("returns NaN when a non-numeric value is used", function() {
        assert.isNaN(multiply("a", 5));
        assert.isNaN(multiply(3, Number("not-a-number")));
    });

    it("preserves sign rules", function() {
        assert.equal(multiply(-1, 8), -8);
        assert.equal(multiply(1, -8), -8);
        assert.equal(multiply(-1, -8), 8);
    });
});
