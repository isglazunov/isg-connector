define(['./lodash.js', './testModule.js'], function(){
    console.log(lodash);
    console.log(testModule);
    describe('isg-connector', function(){
        it('should check testModule', function(){
            testModule.should.have.type('object');
            testModule.should.have.property('a', 'b');
            testModule.should.have.property('lodash');
            testModule.lodash.should.have.type('function');
        });
    });
});