# isg-connector@0.0.2
Code of universal connection module for JavaScript.

## Install

* NPM `npm install isg-connector`
* GIT `git clone https://github.com/isglazunov/isg-connector.git`
* download from [releases](https://github.com/isglazunov/isg-connector/releases)

## Usage

### Code
Use this code to your module:
```js
(function(b,constructor,c,d){if(typeof(window)!=='undefined'){var e=[];for(var f in d){e.push(window[d[f]])}this[b]=constructor.apply(null,e)}if(typeof(define)!=='undefined'&&define.amd){var e=['module'];for(var f in c){e.push(c[f])}define(e,function(a){a.exports=constructor.apply(null,[].slice.call(arguments,1))})}if(typeof(module)!=='undefined'&&module.exports&&typeof(require)=='function'){var e=[];for(var f in c){e.push(require(c[f]))}module.exports=constructor.apply(null,e)}return constructor})(
    'MyModule', function(_){
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

### 0.0.2
Removed the variable version.

### 0.0.1
The basic functionality.