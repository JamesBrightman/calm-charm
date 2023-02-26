import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('Icon Button Component', () => {
  it('Icon button renders', () => {
    const { baseElement } = render(
      <IconButton icon={<div>Test Icon</div>} buttonText={'Foo'} />
    );

    expect(baseElement).toBeTruthy();
  });

  it('Icon button matches snapshot', () => {
    const { baseElement } = render(
      <IconButton icon={<div>Test Icon</div>} buttonText={'Foo'} />
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('Icon button has custom text', () => {
    render(<IconButton icon={<div>Test Icon</div>} buttonText={'Bar Foo'} />);

    expect(screen.getByText('Bar Foo')).toBeInTheDocument();
  });

  it('Icon button renders custom class', () => {
    render(
      <IconButton
        className="bg-green-500 text-sm"
        icon={<div>Test Icon</div>}
        buttonText={'Foo'}
        data-testId="iconId"
      />
    );

    expect(screen.getByTestId('iconId')).toHaveClass('bg-green-500 text-sm');
  });
});
