import React from 'react';

/**
 * This funny tag syntax is neither a string nor HTML.
 *
 * It is called JSX, and it is a syntax extension to JavaScript that
 * comes with the full power of JavaScript. You can put any JavaScript
 * expressions within braces inside JSX.
 *
 * Please take note that this syntax is not a valid syntax recognised
 * by the browser, special tools and compilation is needed to make this syntax
 * recognised by the browser.
 */

// 01 - Introduce JSX syntax
const element1 = <h1>01 - JSX</h1>; // JSX produces React “elements”.

// 02 - Embedding expression in JSX
const element2 = <h1>01 - {'jsx'.toUpperCase()}</h1>; // JSX produces React “elements”.

// 03 - JSX is an expression too
function element3(title) {
  if (title) {
    return <h1>{title}</h1>;
  }
  return <h1>01 - JSX</h1>;
}

// 04 - Attributes in JSX
const element4_1 = <h1 className="title">01 - JSX</h1>;
const element4_2 = <h1 tabIndex={0}>01 - JSX</h1>;

// 05 - Children in JSX
const element5 = (
  <div>
    <h1>01 - JSX</h1>
    <div>lorem ipsum</div>
  </div>
);

// 06 - JSX must contain only single root
const element6 = (
  <>
    <h1>01 - JSX</h1>
    <div>lorem ipsum</div>
  </>
);

export default function Jsx() {
  return element1;
}
