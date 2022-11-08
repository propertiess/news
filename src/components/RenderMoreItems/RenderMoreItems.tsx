import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { InView } from 'react-intersection-observer';
import { Loader } from '@/components';

interface Props extends HTMLAttributes<unknown> {
  countRenderedItems: number;
  to: number;
  renderMore: (inView: any) => void;
}

const RenderMoreItems: FC<PropsWithChildren<Props>> = ({
  countRenderedItems,
  to,
  renderMore
}) => {
  return (
    <>
      {countRenderedItems !== to && (
        <InView as='li' onChange={renderMore}>
          <Loader />
        </InView>
      )}
    </>
  );
};

export { RenderMoreItems };
