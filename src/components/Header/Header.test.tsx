import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  test('renders', () => {
    render(<Header data-testid='header' />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
