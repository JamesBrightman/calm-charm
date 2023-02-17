import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorChit } from './ErrorChit';

describe('Error Chit Component', () => {
  it('Error Chit renders', () => {
    const { baseElement } = render(
      <ErrorChit>
        <p>{'Foo Bar'}</p>
      </ErrorChit>
    );

    expect(baseElement).toBeTruthy();
  });

  it('Error Chit matches snapshot', () => {
    const { baseElement } = render(
      <ErrorChit>
        <p>{'Foo Bar'}</p>
      </ErrorChit>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('Error Chit displays custom text', () => {
    render(
      <ErrorChit>
        <p>{'Foo Bar'}</p>
      </ErrorChit>
    );

    expect(screen.getByText('Foo Bar')).toBeInTheDocument();
  });

  it('Error Chit renders with custom class', () => {
    render(
      <ErrorChit className="bg-blue-500 text-lg" data-testId="chitTest">
        <p>{'Foo Bar'}</p>
      </ErrorChit>
    );

    expect(screen.getByTestId('chitTest')).toHaveClass('bg-blue-500 text-lg');
  });
});
