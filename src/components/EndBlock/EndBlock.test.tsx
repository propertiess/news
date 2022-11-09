import { render, screen } from '@testing-library/react';
import { EndBlock } from './EndBlock';

const setupIsEnd = () => render(<EndBlock isEnd />);
const setup = () => render(<EndBlock isEnd={false} />);

describe('EndBlock', () => {
  test('no renders', () => {
    setup();
    expect(screen.queryByTestId('end-block')).toBeNull();
  });

  test('renders', () => {
    setupIsEnd();
    expect(screen.getByTestId('end-block')).toBeInTheDocument();
  });
});
