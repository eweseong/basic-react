import React from 'react';

export default function LoginButton(props) {
  return (
    <button className="btn" type="button" onClick={props.login}>
      Login
    </button>
  );
}
