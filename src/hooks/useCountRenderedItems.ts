import { useState } from 'react';

export const useCountRenderedItems = (initState: number, to: number) => {
  const [countRenderedItems, setCountRenderedItems] = useState(initState);

  const incrementCountRenderedItems = (inView: any) => {
    if (!inView) return;
    if (countRenderedItems === to) return;

    let incrementedCount = countRenderedItems + 10;

    if (incrementedCount > to) {
      incrementedCount = to;
      setCountRenderedItems(incrementedCount);
      return;
    }

    setCountRenderedItems(incrementedCount);
  };

  return {
    countRenderedItems,
    incrementCountRenderedItems
  };
};
