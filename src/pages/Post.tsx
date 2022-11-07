import { FC, HTMLAttributes } from 'react';
import { useParams } from 'react-router-dom';
import { PostView } from '@/components/PostView/PostView';

interface Props extends HTMLAttributes<unknown> {}

const Post: FC<Props> = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <PostView id={id} />
    </>
  );
};

export { Post };
