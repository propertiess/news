import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Navbar } from './Navbar';

const setup = () =>
  render(
    <HashRouter>
      <Navbar />
    </HashRouter>
  );

describe('Header', () => {
  test('renders', () => {
    setup();
    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });

  test('have child', () => {
    setup();
    expect(screen.getByTestId('nav').childElementCount).toBe(1);
  });

  test('should have text propertiess news', () => {
    setup();
    expect(screen.getByTestId('nav')).toHaveTextContent(/propertiess news/i);
  });
});
