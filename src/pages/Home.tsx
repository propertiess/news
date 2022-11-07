import { FC } from 'react';
import { PostList } from '@/components';
import { UpdatePostsButton } from '@/components/';

const Home: FC = () => {
  return (
    <>
      <UpdatePostsButton />
      <PostList />
    </>
  );
};

export { Home };
