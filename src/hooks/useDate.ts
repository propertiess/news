import { useMemo } from 'react';
import { getDate } from '@/utils/helpers/getDate';

export const useDate = (numDate: number) => {
  const date = useMemo(() => getDate(numDate), [numDate]);

  return date;
};
