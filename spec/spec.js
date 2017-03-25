var _ = require('lodash');
var arrays = require('../lib/arrays');

describe("the utils", function() {

	it("have some optimized array functions", function() {
		var a = [[0,1],[2,3],[2,4],[3,1]];
		var b = [[0,1],[1,3],[2,4],[4,3]];
		var c = [[10,1],[2,3],[-2,4],[3,1]];

		var intersection = arrays.intersectSortedArrays(a, b);
		expect(_.isEqual(intersection, [[0,1],[2,4]])).toBe(true);

		var union = arrays.uniteSortedArrays(a, b);
		expect(_.isEqual(union, [[0,1],[0,1],[1,3],[2,3],[2,4],[2,4],[3,1],[4,3]])).toBe(true);

		var sorted = c.sort(arrays.compareArrays);
		expect(_.isEqual(sorted, [[-2,4],[2,3],[3,1],[10,1]])).toBe(true);

		var union = arrays.mergeSortedArrays([a,b,sorted]);
		expect(_.isEqual(union, [[-2,4],[0,1],[0,1],[1,3],[2,3],[2,3],[2,4],[2,4],[3,1],[3,1],[4,3],[10,1]])).toBe(true);
	});

});
