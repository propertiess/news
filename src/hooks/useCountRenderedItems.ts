import { useState } from 'react';
import { useActions, useAppSelector } from '@/store/hooks';

export const useCountRenderedItems = (
  initState: number,
  to: number,
  type?: string
) => {
  if (initState > to) initState = to;

  if (type) {
    const { shouldRendered } = useAppSelector(state => state.scroll);
    if (shouldRendered > initState) initState = shouldRendered;
  }

  const [countRenderedItems, setCountRenderedItems] = useState(initState);
  const { setShouldRendered } = useActions();

  const incrementCountRenderedItems = (
    inView: any,
    entry: IntersectionObserverEntry
  ) => {
    if (!inView) return;
    if (countRenderedItems === to) return;
    if (entry?.boundingClientRect?.bottom < 450) return;

    let incrementedCount = countRenderedItems + 10;

    if (incrementedCount >= to) {
      incrementedCount = to;
      setCountRenderedItems(incrementedCount);
      if (type) setShouldRendered(incrementedCount);
      return;
    }

    setCountRenderedItems(incrementedCount);

    if (type) setShouldRendered(incrementedCount);
  };

  return {
    countRenderedItems,
    incrementCountRenderedItems
  };
};
