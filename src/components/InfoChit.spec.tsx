import React from 'react';
import { render, screen } from '@testing-library/react';
import { InfoChit } from './InfoChit';

describe('Info Chit Component', () => {
  it('Info chit renders', () => {
    const { baseElement } = render(
      <InfoChit>
        <p>{'Foo Bar'}</p>
      </InfoChit>
    );

    expect(baseElement).toBeTruthy();
  });

  it('Info chit matches snapshot', () => {
    const { baseElement } = render(
      <InfoChit>
        <p>{'Foo Bar'}</p>
      </InfoChit>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('Info Chit displays custom text', () => {
    render(
      <InfoChit>
        <p>{'Bar Foo'}</p>
      </InfoChit>
    );

    expect(screen.getByText('Bar Foo')).toBeInTheDocument();
  });

  it('Info Chit renders with custom class', () => {
    render(
      <InfoChit className="bg-blue-500 text-lg" data-testId="chitTest">
        <p>{'Foo Bar'}</p>
      </InfoChit>
    );

    expect(screen.getByTestId('chitTest')).toHaveClass('bg-blue-500 text-lg');
  });
});
