---
title: "IIFE JavaScript"
date: "2018-05-26"
---

### What is IIFE?
IIFE is one of JavaScript programming language idiom. In my early time learning
JavaScript, I also found people use self-executing anonymous function or 
self-invoked anonymous function idiom. But refer to 
[Ben Alman](http://benalman.com/news/2010/11/immediately-invoked-function-expression/),
IIFE (Immediately-Invoked Function Expressions) is the right terminology for it.

### Why do we use IIFE?
IIFE produces a lexical scoping by using JavaScript's function scoping.
This lexical scoping prevent us from polluting the global environment. It also make
variable hoisting only happen inside the scope, it is not hoisted into global environment.

### How to write IIFE?
There are several ways to write immediately invoked function expressions.

```javascript
(function (){ /* code */ }()); // recommended by Crockford
(function(){ /* code */ })(); // this also fine

!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();
```

<br />
Maybe you will think why we need additional parens as wrapper. It should be as simple
as declare a function and then add `()` to call that function. But it will not work. It will lead into syntax error because it is not a valid javascript code. Look at code below.

```javascript
function(){ /* code */ }()
// Uncaught SyntaxError: Unexpected token (

function myNamedFunc(){ /* code */ }()
// Uncaught SyntaxError: Invalid or unexpected token
```

<br />
To handle this syntax error, we need to make JavasScript engine parse function
expression. There are several ways to produce a function expression from a function declaration. We can wrap the
function declaration with parens `()`. We also be able to add unary operator like `!`, `+`, `-`, `~` or other unary operator to treat whatever coming after it as
expression.

There is difference between using parens wrapper and unary operator to
create expressions. When using unary operator, your return value from your
function will be changed. You can use unary operator if you are not concerning about return value of
the function. Look at code below.

```javascript
// function return expected value
(function (){ return 10 }()); // 10
(function(){ return 10 })(); // 10

// function return unexpected value
!function(){ return 10 }(); // false
~function(){ return 10 }(); // -11
-function(){ return 10 }(); // -10
+function(){ return 'halo' }(); // NaN
~function(){ return { name: 'haoo' } }(); // -1
```

### Use case

Prevent variable to pollute global environment, especially if you want your code
run in the browser that is not supporting ES2015.
```javascript
(function (){
  var age = 25; // age only live inside this IIFE

  // other statements
}());

console.log(age); // Uncaught ReferenceError: age is not defined
```

<br />
IIFE will help you to implement JavaScript Module pattern. Below is the example
of singleton pattern.

```javascript
var counter = (function (){
  var count = 0;

  return {
    add: function() {
      count = count + 1;
    },
    get: function() {
      return count;
    },
  };
}());

counter.add()
counter.add()
counter.add()
console.log(counter.get()) // 3
```

### Further reading
If you interested in learning IIFE more deeper, you can read articles below. In
Airbnb's article, you also will find why Crockford's way is more preferable.

-  [immediately-invoked-function-expression (Bel Alman )](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
-  [immediately-invoked-function-expressions-and-parentheses (airbnb-engineering)](https://medium.com/airbnb-engineering/immediately-invoked-function-expressions-and-parentheses-eeea53b39e0b)
-  [essential-javascript-mastering-immediately-invoked-function-expressions (Chandra Gundamaraju)](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)
