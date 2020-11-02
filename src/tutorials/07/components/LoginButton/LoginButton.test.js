import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import LoginButton from './LoginButton';

describe('LoginButton', () => {
  function setup() {
    const mockedLogin = jest.fn();
    const utils = render(<LoginButton login={mockedLogin} />);
    const button = screen.getByRole('button', { name: /login/i });

    return {
      button,
      mockedLogin,
      ...utils,
    };
  }

  it('should render "login" label', () => {
    render(<LoginButton />);
    const button = screen.getByRole('button');
    expect(button).not.toBeNull();
  });

  it('should trigger login handler when clicked', () => {
    const { button, mockedLogin } = setup();
    expect(mockedLogin).not.toBeCalled();
    fireEvent.click(button);
    expect(mockedLogin).toBeCalled();
  });
});
