var guid = require('../../src/guid');
var assert = require("assert")

describe('guid', function() {

	it('should return valid guid', function() {
		var expectedPattern = /(\{{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}\}{0,1})/;
		var actual = guid.newGuid();
		assert.equal(expectedPattern.test(actual), true);
	});

});