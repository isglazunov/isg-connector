// isg-connector@0.0.2
// https://github.com/isglazunov/isg-connector
// The module is not to be used independently.
// Code module must be used for other modules.

// Arguments typing
// String name
// Function constructor(dependencies...)
// Array modules ['lodash']
// Array libraries ['_']

// Nocompressed
(function(name, constructor, modules, libraries){
    
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
    'name', function(){}, [], []
)

// Compressed
(function(b,constructor,c,d){if(typeof(window)!=='undefined'){var e=[];for(var f in d){e.push(window[d[f]])}this[b]=constructor.apply(null,e)}if(typeof(define)!=='undefined'&&define.amd){var e=['module'];for(var f in c){e.push(c[f])}define(e,function(a){a.exports=constructor.apply(null,[].slice.call(arguments,1))})}if(typeof(module)!=='undefined'&&module.exports&&typeof(require)=='function'){var e=[];for(var f in c){e.push(require(c[f]))}module.exports=constructor.apply(null,e)}return constructor})(
    'name', function(){}, [], []
)