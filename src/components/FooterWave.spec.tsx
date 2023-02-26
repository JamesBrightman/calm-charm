import React from 'react';
import { render } from '@testing-library/react';
import { FooterWave } from './FooterWave';

describe('Footer Wave Component', () => {
  it('Footer Wave renders', () => {
    const { baseElement } = render(<FooterWave />);

    expect(baseElement).toBeTruthy();
  });

  it('Footer Wave matches snapshot', () => {
    const { baseElement } = render(<FooterWave />);

    expect(baseElement).toMatchSnapshot();
  });
});
