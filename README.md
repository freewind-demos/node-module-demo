How to run
=========

```
node index.js
```

will print `Hello, util`, which is from another module defined in `util.js`.

About `exports` and `module.exports`
-------------------------------------

Quick Summary: both `exports` and `module.exports` point to the same object, unless you reassign one. And in the end `module.exports` is returned. So if you reassigned exports to a function then dont expect a function since it isn't going to be returned. However if you had assigned function like this `exports.func = function...` then resulting thing would have func property with function as a value. Because you added the property to the object that exports was pointing to ...

Questions
---------

1. How are `exports` and `module.exports` working?

<http://www.hacksparrow.com/node-js-exports-vs-module-exports.html>

2. Why we need both of them since we can do anything with `module.exports`?

<http://stackoverflow.com/questions/35826316/nodejs-exports-and-module-exports-why-do-we-need-exports-anyway>

Short version: You can ignore `exports` which is just for typing convenience.