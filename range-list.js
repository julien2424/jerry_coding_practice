/**
 * The general approach is to maintain a list that gets as big as the current largest range
 * When we need to print, we iterate through this list and extract the ranges
 * The bigO of add(range) and remove(range) is O(range[1] - range[0])
 * The bigO of print is O(length of rangeList)
 */
class RangeList {
    constructor() {
        this.rangeList = []
    }

    /**
     * grows array length with empty values to be one greater than the largest range
     * ex: adding [10, 21) as first value, array length will be 22
     */
    growArray(maxRange) {
        this.rangeList.length = maxRange + 1
    }

    /**
     * shrinks array length to be one greater than the largest range
     * ex: removing [10, 21) when prev. largest range went up to 21, new array length will be 11
     */
    shrinkArray(minRange) {
        this.rangeList.length = minRange + 1
    }

    /**
     * checks if we need to grow array if new range is largest so far
     * then, fills in new range with 1's irrelevant of current value
     */
    add(range) {
        if (range[1] + 1 > this.rangeList.length) this.growArray(range[1])
        this.rangeList.fill(1, range[0], range[1])
    }

    /**
     * checks if we need to shrink array. If we do, shrink it (which will naturally
     * get rid of the range) and if not, then fill new range with null values
     */
    remove(range) {
        if (range[1] > this.rangeList.length) {
            this.shrinkArray(range[0]);
        } else {
            this.rangeList.fill(null, range[0], range[1]);
        }
    }

    /**
     * iterate through our range list and add ranges as we see them close
     * last index of range list is always != 1, so we make sure to get the last range
     */
    print() {
        let currentRange = false
        let start, end;
        let output_str = ""
        for (let i = 0; i < this.rangeList.length; i++) {
            if (this.rangeList.at(i) === 1) {
                if (currentRange) {
                    end = i + 1
                } else {
                    currentRange = true
                    start = i
                    end = i + 1
                }
            } else {
                if (currentRange) {
                    output_str += `[${start}, ${end}) `
                    currentRange = false
                }
            }
        }
        return output_str
    }
}
module.exports = { RangeList}
