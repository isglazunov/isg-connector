# isg-connector@0.0.1
Code of universal connection module for JavaScript.

## Install

* NPM `npm install isg-connector`
* GIT `git clone https://github.com/isglazunov/isg-connector.git`
* download from [releases](https://github.com/isglazunov/isg-connector/releases)

## Usage

### Code
Use this code to your module:
```js
(function(b,c,constructor,d,e){constructor.version=c;if(typeof(window)!=='undefined'){var f=[];for(var g in e){f.push(window[e[g]])}this[b]=constructor.apply(null,f)}if(typeof(define)!=='undefined'&&define.amd){var f=['module'];for(var g in d){f.push(d[g])}define(f,function(a){a.exports=constructor.apply(null,[].slice.call(arguments,1))})}if(typeof(module)!=='undefined'&&module.exports&&typeof(require)=='function'){var f=[];for(var g in d){f.push(require(d[g]))}module.exports=constructor.apply(null,f)}return constructor})(
    'MyModule', '0.0.0', function(_){
        return {
            method: function(){
                console.log('myModule connected');
            }
        }
    }, ['lodash'], ['_']
)
```
Arguments:
* String moduleName for window method
* String version for module.version
* Function constructor(modules...)
* Array module names for define and require methods
* Array libraries names for window method

Suppose there is a module module.js a configured connector.

### window (Browser)
index.html
```html
<script src="./myModule.js"></script>
<script>
    MyModule.method()
    // myModule connected
</script>
```

### define (AMD/Requirejs)
```html
<script src="./require.js"></script>
<script>
    require(['myModule'], function(MyModule){
        MyModule.method()
        // myModule connected
    });
</script>
```

### require (Node.js)
If the module is at node_modules/myModule.
```js
var MyModule = require('myModule');
MyModule.method()
// myModule connected
```

## Versions

### 0.0.1
The basic functionality.