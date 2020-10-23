import React from 'react';

export default function LogoutButton(props) {
  return (
    <button type="button" onClick={props.logout}>
      Logout
    </button>
  );
}
