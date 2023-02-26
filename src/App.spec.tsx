import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {
  it('Component renders', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('Component matches snapshot', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });
});
