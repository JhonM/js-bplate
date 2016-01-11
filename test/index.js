var should = require('chai').should(),
    jsBplate = require('../index');

describe('#equals', function() {
    var multiply = new jsBplate();

    it('verfied if multiply total is 5', function() {
        var total = multiply.subtract(10);
        total.should.equal(5);
    });
});