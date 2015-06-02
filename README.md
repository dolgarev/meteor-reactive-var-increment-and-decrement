[![Build Status](https://travis-ci.org/dolgarev/meteor-reactive-var-increment-and-decrement.svg?branch=master)](https://travis-ci.org/dolgarev/meteor-reactive-var-increment-and-decrement)
meteor-reactivevar-increment-and-decrement
====================
Adds methods "inc" and "dec" to ReactiveVar.

```js
var v = new ReactiveVar(1);
v.inc();  // => 2
v.inc(3); // => 5
v.dec(4); // => 1
v.dec();  // => 0
```
