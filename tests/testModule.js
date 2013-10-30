(function(testModule){
    (function(b,c,constructor,d,e){constructor.version=c;if(typeof(window)!=='undefined'){var f=[];for(var g in e){f.push(window[e[g]])}this[b]=constructor.apply(null,f)}if(typeof(define)!=='undefined'&&define.amd){var f=['module'];for(var g in d){f.push(d[g])}define(f,function(a){a.exports=constructor.apply(null,[].slice.call(arguments,1))})}if(typeof(module)!=='undefined'&&module.exports&&typeof(require)=='function'){var f=[];for(var g in d){f.push(require(d[g]))}module.exports=constructor.apply(null,f)}return constructor})(
        'testModule', '0.0.1', testModule, ['lodash'], ['_']
    );
}(function(lodash){
    return {
        lodash: lodash,
        a: 'b'
    };
}))