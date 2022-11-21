import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useActions } from '@/store/hooks';
import { useDate } from './useDate';

export const useFetchedData = <T>(
  id: number,
  response: (id: number) => Promise<AxiosResponse<T, any>>,
  type?: string
) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const { incrementRenderedPosts, decrementRenderedPosts } = useActions();

  const date = useDate((data as any)?.time);

  useEffect(() => {
    (async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { data } = await response(id);
        setData(data);
        if (type) incrementRenderedPosts();
      } catch (err) {
        setError(new Error((err as Error).message));
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      if (type) decrementRenderedPosts();
    };
  }, []);

  return {
    data,
    date,
    isLoading,
    error
  };
};
