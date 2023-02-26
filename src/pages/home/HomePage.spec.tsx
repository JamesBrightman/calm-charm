import React from 'react';
import { render } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('App component', () => {
  it('Home page renders', () => {
    const { baseElement } = render(<HomePage />);

    expect(baseElement).toBeTruthy();
  });

  it('Home page matches snapshot', () => {
    const { baseElement } = render(<HomePage />);

    expect(baseElement).toMatchSnapshot();
  });
});
