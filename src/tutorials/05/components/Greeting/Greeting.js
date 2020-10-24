import React from 'react';

export default function Greeting(props) {
  /**
   * Preventing Component from Rendering
   *
   * In rare cases you might want a component to hide itself even though it
   * was rendered by another component. To do this return null instead of
   * its render output.
   */
  if (!props.username) {
    return null;
  }

  /**
   * Inline If-Else with Conditional Operator
   *
   * Another method for conditionally rendering elements inline
   * is to use the JavaScript conditional operator condition ? true : false.
   */
  return <span>Welcome {props.username ? `${props.username}` : 'user'}!</span>;
}
