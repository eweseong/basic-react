import React from 'react';

export default function LoginButton(props) {
  return (
    <button type="button" onClick={props.login}>
      Login
    </button>
  );
}
