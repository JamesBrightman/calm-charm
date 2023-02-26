import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login Page', () => {
  it('Login page renders', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('Login page matches snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
