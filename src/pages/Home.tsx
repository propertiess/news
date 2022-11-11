import { FC } from 'react';
import { PostList, UpdateButton } from '@/components';
import { useActions } from '@/store/hooks';

const Home: FC = () => {
  const { fetchIdPosts } = useActions();

  const updatePosts = () => {
    fetchIdPosts();
  };

  return (
    <>
      <UpdateButton title='Update posts' onClick={updatePosts} />
      <PostList />
    </>
  );
};

export { Home };
