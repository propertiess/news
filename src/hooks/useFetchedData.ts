import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useDate } from './useDate';

export const useFetchedData = <T>(
  id: number,
  response: (id: number) => Promise<AxiosResponse<T, any>>
) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const date = useDate((data as any)?.time);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const { data } = await response(id);
        setData(data);
      } catch (err) {
        setError(new Error((err as Error).message));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    date,
    isLoading,
    error
  };
};
