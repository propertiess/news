import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<unknown> {}

const NotFound: FC<Props> = ({ ...rest }) => {
  return <div {...rest}>404 error</div>;
};

export { NotFound };
