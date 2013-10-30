require('should');

describe('isg-connector', function(){
    it('should require testModule', function(){
        var testModule = require('./testModule.js');
        testModule.should.have.type('object');
        testModule.should.have.property('a', 'b');
        testModule.should.have.property('lodash');
        testModule.lodash.should.have.type('function');
    });
});