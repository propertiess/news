import { useEffect, useState } from 'react';
import { IComment } from '@/interfaces/comment.interface';
import { CommentService } from '@/services/comment.service';
import { useDate } from './useDate';

export const useFetchedComment = (id: number) => {
  const [comment, setComment] = useState<IComment>();
  const date = useDate(comment?.time!);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComment = async () => {
      setIsLoading(true);
      const { data } = await CommentService.fetchComment(id);
      setComment(data);

      setIsLoading(false);
    };

    fetchComment();
  }, []);

  return {
    comment,
    date,
    isLoading
  };
};
