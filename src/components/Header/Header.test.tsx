import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Header } from './Header';

const setup = () =>
  render(
    <HashRouter>
      <Header data-testid='header' />
    </HashRouter>
  );

describe('Header', () => {
  test('renders', () => {
    setup();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  test('have child', () => {
    setup();
    expect(screen.getByTestId('header').childElementCount).toBe(1);
  });
});
