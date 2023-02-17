import React from 'react';
import { render } from '@testing-library/react';
import { HeaderWave } from './HeaderWave';

describe('Header Wave Component', () => {
  it('Header Wave renders', () => {
    const { baseElement } = render(<HeaderWave />);

    expect(baseElement).toBeTruthy();
  });

  it('Header Wave matches snapshot', () => {
    const { baseElement } = render(<HeaderWave />);

    expect(baseElement).toMatchSnapshot();
  });
});
