import { render, screen } from '@testing-library/react';
import { UpdateButton } from './UpdateButton';

const setup = () => render(<UpdateButton title='Update' />);

describe('UpdateButton', () => {
  test('renders', () => {
    setup();
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  test('title should be update', () => {
    setup();

    const btnEl = screen.getByTestId('btn');
    expect(btnEl).toHaveTextContent(/update/i);
  });
});
