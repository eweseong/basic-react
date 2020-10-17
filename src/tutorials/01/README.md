# Day 01 - JSX
```js
const element1 = <h1>01 - Intro to JSX</h1>;
```
This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript that comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX.

Please take note that this syntax is not a valid syntax recognised by the browser, special tools and compilation is needed to make this syntax recognised by the browser.

Some of the key concepts about ***JSX***:
* support embedding expression
* JSX itself is an expression
* attributes in JSX is `camelCase` and different from normal HTML atttributes
* support nesting JSX within JSX
* must contain only single root
* end result is called `React element`