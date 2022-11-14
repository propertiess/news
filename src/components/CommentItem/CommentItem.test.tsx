import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@/utils/helpers/renderWithProviders';
import { CommentItem } from './CommentItem';

const setup = () => renderWithProviders(<CommentItem id={15} />);

describe('CommentItem', () => {
  beforeEach(setup);

  test('renders', async () => {
    const commentEl = await screen.findByRole('listitem');
    expect(commentEl).toBeInTheDocument();
  });

  test('message correctly', async () => {
    await screen.findByText(
      /"the rising star of venture capital" -unknown VC eating lunch on SHR/i
    );
  });

  test('have btn to show answer on the message', async () => {
    await screen.findByText(/show answers/i);
  });

  test('btn textContent onClick should be hide answers', async () => {
    const btnEl = await screen.findByText(/show answers/i);
    await userEvent.click(btnEl);
    expect(btnEl.textContent).toMatch(/hide answers/i);
  });
});
