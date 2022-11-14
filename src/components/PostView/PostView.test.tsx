import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils/helpers/renderWithProviders';
import { PostView } from './PostView';

const setup = () => renderWithProviders(<PostView id='1' />);

describe('PostView', () => {
  beforeEach(() => {
    setup();
  });

  test('renders', async () => {
    const postViewEl = await screen.findByTestId('post-view');
    expect(postViewEl).toBeInTheDocument();
  });

  test('date should be 22:21 09.10.2006', async () => {
    const dateEl = await screen.findByTestId('date');
    expect(dateEl.textContent).toMatch(/22\:21 09\.10\.2006/i);
  });

  test('title should be Y Combinator', async () => {
    await screen.findByText(/Y Combinator/i);
  });

  test('created by should be created by pg', async () => {
    await screen.findByText(/created by pg/i);
  });

  test('link should have href equal http://ycombinator.com/', async () => {
    const linkEl: HTMLLinkElement = await screen.findByText(
      /Reference to the source/i
    );
    expect(linkEl.href).toMatch('http://ycombinator.com/');
  });

  test('length comments should be equal 15', async () => {
    await screen.findByText(/15 commentaries/i);
  });
});
