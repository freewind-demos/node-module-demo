var m1 = require('./m1');
var m2 = require('./m2');
var m3 = require('./m3');
var m4 = require('./m4');

console.log('---------- m1 -----------');
m1();

console.log('---------- m2 -----------');
m2.hello1();
m2.hello2();

console.log('---------- m3 -----------');
console.log(m3);
try { 
  m3.hello();
} catch(e) {console.error(e)};

console.log('---------- m4 -----------');
console.log(m4);

try { 
  m4();
} catch(e) {console.error(e)};


try { 
  m4.hello2();
} catch(e) {console.error(e)};