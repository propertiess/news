import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<unknown> {}

const Home: FC<Props> = () => {
  return <div>Home page</div>;
};

export { Home };
