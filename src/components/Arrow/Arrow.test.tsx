import { render, screen } from '@testing-library/react';
import { Arrow } from './Arrow';

const setup = () => render(<Arrow title='show comments' onClick={() => {}} />);
const setupUp = () =>
  render(<Arrow title='show comments' up onClick={() => {}} />);

describe('Arrow', () => {
  test('down renders', () => {
    setup();
    expect(screen.getByTestId('arrow-down')).toBeInTheDocument();
    expect(screen.queryByTestId('arrow-up')).toBeNull();
  });

  test('up renders', () => {
    setupUp();
    expect(screen.getByTestId('arrow-up')).toBeInTheDocument();
    expect(screen.queryByTestId('arrow-down')).toBeNull();
  });
});
