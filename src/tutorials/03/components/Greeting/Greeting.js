import React from 'react';

export default function Greeting(props) {
  return <span>Welcome {props.username ? `${props.username}` : 'user'}!</span>;
}
