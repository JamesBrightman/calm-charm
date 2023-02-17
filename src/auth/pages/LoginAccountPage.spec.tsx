import React from 'react';
import { render } from '@testing-library/react';
import { LoginAccountPage } from './LoginAccountPage';
import { BrowserRouter } from 'react-router-dom';

describe('Login Account Page', () => {
  it('Login Account page renders', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <LoginAccountPage toggleCreate={() => {}} />
      </BrowserRouter>
    );

    expect(baseElement).toBeTruthy();
  });

  it('Login Account page matches snapshot', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <LoginAccountPage toggleCreate={() => {}} />
      </BrowserRouter>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
