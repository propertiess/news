import { useEffect, useState } from 'react';
import { IPost } from '@/interfaces/post.interface';
import { PostService } from '@/services/post.service';
import { getDate } from '@/utils/helpers/getDate';

export const useFetchedPost = (id: number) => {
  const [post, setPost] = useState<IPost>();
  const [date, setDate] = useState<{ date: string; time: string }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const { data } = await PostService.fetchPost(id);
      setPost(data);

      const { date, time } = getDate(data.time);
      setDate({ date, time });
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
