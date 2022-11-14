import { screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { renderWithProviders } from '@/utils/helpers/renderWithProviders';
import { PostItem } from './PostItem';

const setup = () =>
  renderWithProviders(
    <HashRouter>
      <PostItem id={1} />
    </HashRouter>
  );

describe('PostItem', () => {
  beforeEach(() => {
    setup();
  });

  test('renders', async () => {
    const postItemEl = await screen.findByRole('listitem');
    expect(postItemEl).toBeInTheDocument();
  });

  test('date should be 09.10.2006 22:21', async () => {
    await screen.findByText(/09\.10\.2006 22\:21/i);
  });

  test('title should be Y Combinator', async () => {
    await screen.findByText(/Y Combinator/i);
  });

  test('rating is equal 57', async () => {
    await screen.findByText(/rating\: 57/i);
  });

  test('created by should be created by pg', async () => {
    await screen.findByText(/created by pg/i);
  });
});
