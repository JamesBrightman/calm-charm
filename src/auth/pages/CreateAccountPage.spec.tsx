import React from 'react';
import { render } from '@testing-library/react';
import { CreateAccountPage } from './CreateAccountPage';

describe('Create Account Page', () => {
  it('Create Account page renders', () => {
    const { baseElement } = render(
      <CreateAccountPage toggleLogin={() => {}} />
    );

    expect(baseElement).toBeTruthy();
  });

  it('Create Account page matches snapshot', () => {
    const { baseElement } = render(
      <CreateAccountPage toggleLogin={() => {}} />
    );

    expect(baseElement).toMatchSnapshot();
  });
});
