const assert = require('assert');
const {RangeList} = require("./range-list");

describe('Example test case', function () {
    it('should return correct ranges', function () {
        const rl = new RangeList();
        rl.add([1, 5]);
        assert.equal(rl.print(), "[1, 5) ")
        rl.add([10, 20]);
        assert.equal(rl.print(), "[1, 5) [10, 20) ")
        rl.add([20, 20]);
        assert.equal(rl.print(), "[1, 5) [10, 20) ")
        rl.add([20, 21]);
        assert.equal(rl.print(), "[1, 5) [10, 21) ")
        rl.add([2, 4]);
        assert.equal(rl.print(), "[1, 5) [10, 21) ")
        rl.add([3, 8]);
        assert.equal(rl.print(), "[1, 8) [10, 21) ")
        rl.remove([10, 10]);
        assert.equal(rl.print(), "[1, 8) [10, 21) ")
        rl.remove([10, 11]);
        assert.equal(rl.print(), "[1, 8) [11, 21) ")
        rl.remove([15, 17]);
        assert.equal(rl.print(), "[1, 8) [11, 15) [17, 21) ")
        rl.remove([3, 19]);
        assert.equal(rl.print(), "[1, 3) [19, 21) ")
    });
});

describe('Barely overlapping ranges edge case', function () {
    it('should return a single range', function () {
        const rl = new RangeList();
        rl.add([1, 3]);
        assert.equal(rl.print(), "[1, 3) ")
        rl.add([3, 5]);
        assert.equal(rl.print(), "[1, 5) ")
    });
});

describe('No ranges edge case', function () {
    it('should return no ranges', function () {
        const rl = new RangeList();
        rl.add([1, 5]);
        assert.equal(rl.print(), "[1, 5) ")
        rl.add([10, 20]);
        assert.equal(rl.print(), "[1, 5) [10, 20) ")
        rl.add([20, 20]);
        assert.equal(rl.print(), "[1, 5) [10, 20) ")
        rl.add([20, 21]);
        assert.equal(rl.print(), "[1, 5) [10, 21) ")
        rl.add([2, 4]);
        assert.equal(rl.print(), "[1, 5) [10, 21) ")
        rl.add([3, 8]);
        assert.equal(rl.print(), "[1, 8) [10, 21) ")
        rl.remove([1, 21]);
        assert.equal(rl.print(), "")
    });
});

describe('Almost overlapping edge case', function () {
    it('should return two ranges', function () {
        const rl = new RangeList();
        rl.add([1, 3]);
        assert.equal(rl.print(), "[1, 3) ")
        rl.add([4, 5]);
        assert.equal(rl.print(), "[1, 3) [4, 5) ")
    });
});
