webpackJsonp([0x9750eb7ae030],{382:function(n,a){n.exports={data:{markdownRemark:{html:'<h3>What is IIFE?</h3>\n<p>IIFE is one of JavaScript programming language idiom. In my early time learning\nJavaScript, I also found people use self-executing anonymous function or\nself-invoked anonymous function idiom. But refer to\n<a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">Ben Alman</a>,\nIIFE (Immediately-Invoked Function Expressions) is the right terminology for it.</p>\n<h3>Why do we use IIFE?</h3>\n<p>IIFE produces a lexical scoping by using JavaScript\'s function scoping.\nThis lexical scoping prevent us from polluting the global environment. It also make\nvariable hoisting only happen inside the scope, it is not hoisted into global environment.</p>\n<h3>How to write IIFE?</h3>\n<p>There are several ways to write immediately invoked function expressions.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// recommended by Crockford</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// this also fine</span>\n\n<span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">~</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">-</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<br />\nMaybe you will think why we need additional parens as wrapper. It should be as simple\nas declare a function and then add `()` to call that function. But it will not work. It will lead into syntax error because it is not a valid javascript code. Look at code below.\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// Uncaught SyntaxError: Unexpected token (</span>\n\n<span class="token keyword">function</span> <span class="token function">myNamedFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">/* code */</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// Uncaught SyntaxError: Invalid or unexpected token</span></code></pre>\n      </div>\n<br />\nTo handle this syntax error, we need to make JavasScript engine parse function\nexpression. There are several ways to produce a function expression from a function declaration. We can wrap the\nfunction declaration with parens `()`. We also be able to add unary operator like `!`, `+`, `-`, `~` or other unary operator to treat whatever coming after it as\nexpression.\n<p>There is difference between using parens wrapper and unary operator to\ncreate expressions. When using unary operator, your return value from your\nfunction will be changed. You can use unary operator if you are not concerning about return value of\nthe function. Look at code below.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// function return expected value</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>\n\n<span class="token comment">// function return unexpected value</span>\n<span class="token operator">!</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>\n<span class="token operator">~</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -11</span>\n<span class="token operator">-</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -10</span>\n<span class="token operator">+</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">\'halo\'</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>\n<span class="token operator">~</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'haoo\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span></code></pre>\n      </div>\n<h3>Use case</h3>\n<p>Prevent variable to pollute global environment, especially if you want your code\nrun in the browser that is not supporting ES2015.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span> <span class="token comment">// age only live inside this IIFE</span>\n\n  <span class="token comment">// other statements</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: age is not defined</span></code></pre>\n      </div>\n<br />\nIIFE will help you to implement JavaScript Module pattern. Below is the example\nof singleton pattern.\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> counter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    add<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token keyword">get</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> count<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncounter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\ncounter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\ncounter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 3</span></code></pre>\n      </div>\n<h3>Further reading</h3>\n<p>If you interested in learning IIFE more deeper, you can read articles below. In\nAirbnb\'s article, you also will find why Crockford\'s way is more preferable.</p>\n<ul>\n<li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">immediately-invoked-function-expression (Bel Alman )</a></li>\n<li><a href="https://medium.com/airbnb-engineering/immediately-invoked-function-expressions-and-parentheses-eeea53b39e0b">immediately-invoked-function-expressions-and-parentheses (airbnb-engineering)</a></li>\n<li><a href="https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6">essential-javascript-mastering-immediately-invoked-function-expressions (Chandra Gundamaraju)</a></li>\n</ul>',frontmatter:{title:"IIFE JavaScript",date:"26 May, 2018"},timeToRead:2}},pathContext:{slug:"/iife-javascript/"}}}});
//# sourceMappingURL=path---iife-javascript-5e6519cbed053db91c8c.js.map