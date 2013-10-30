// isg-connector@0.0.1
// https://github.com/isglazunov/isg-connector
// The module is not to be used independently.
// Code module must be used for other modules.

// Arguments typing
// String name
// String version
// Function constructor(dependencies...)
// Array modules ['lodash']
// Array libraries ['_']
(function(name, version, constructor, modules, libraries){
    
    // version
    constructor.version = version;
    
    // window (Browser)
    if(typeof(window) !== 'undefined') {
        var required = [];
        for(var key in libraries) {
            required.push(window[libraries[key]]);
        }
        this[name] = constructor.apply(null, required);
    }
    
    // define (AMD/Requirejs)
    if(typeof(define) !== 'undefined' && define.amd) {
        var required = ['module'];
        for(var key in modules) {
            required.push(modules[key]);
        }
        define(required, function(module){
            module.exports = constructor.apply(null, [].slice.call(arguments, 1));
        });
    }
    
    // require (Node.js)
    if(typeof(module) !== 'undefined' && module.exports && typeof(require) == 'function') {
        var required = [];
        for(var key in modules) {
            required.push(require(modules[key]));
        }
        module.exports = constructor.apply(null, required);
    }
    
    return constructor;
})(
    'name', '0.0.0', function(){}, [], []
)

(function(b,c,constructor,d,e){constructor.version=c;if(typeof(window)!=='undefined'){var f=[];for(var g in e){f.push(window[e[g]])}this[b]=constructor.apply(null,f)}if(typeof(define)!=='undefined'&&define.amd){var f=['module'];for(var g in d){f.push(d[g])}define(f,function(a){a.exports=constructor.apply(null,[].slice.call(arguments,1))})}if(typeof(module)!=='undefined'&&module.exports&&typeof(require)=='function'){var f=[];for(var g in d){f.push(require(d[g]))}module.exports=constructor.apply(null,f)}return constructor})(
    'name', '0.0.0', function(){}, [], []
)