import { useEffect, useState } from 'react';
import { IPost } from '@/interfaces/post.interface';
import { PostService } from '@/services/post.service';
import { useDate } from './useDate';

export const useFetchedPost = (id: number) => {
  const [post, setPost] = useState<IPost>();
  const date = useDate(post?.time!);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const { data } = await PostService.fetchPost(id);
      setPost(data);

      setIsLoading(false);
    };

    fetchPost();
  }, []);

  return {
    post,
    date,
    isLoading
  };
};
