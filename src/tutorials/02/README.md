# Day 02 - Components and Props
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. 

They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. 

Some of the key concepts about ***Components***:
* 2 available types
  * Class component (*used to be only way to handle state in component*)
  * Functional component
* component name ***must*** start with a capital letter
* supports nesting components within components

Some of the key concepts about ***props***:
* props are read-only data, modification is not allowed
* nested React element are passed onto `props.children`