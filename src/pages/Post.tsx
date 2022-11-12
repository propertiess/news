import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { PostView } from '@/components/PostView/PostView';

const Post: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <PostView id={id} />
    </>
  );
};

export { Post };
