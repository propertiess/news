import { FC } from 'react';
import { PostList, UpdateButton } from '@/components';
import { useActions } from '@/store/hooks/useActions';

const Home: FC = () => {
  const { fetchIdPosts } = useActions();
  return (
    <>
      <UpdateButton title='Update posts' onClick={() => fetchIdPosts()} />
      <PostList />
    </>
  );
};

export { Home };
