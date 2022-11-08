import { FC, PropsWithChildren } from 'react';
import { Header, Main } from '@/components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export { Layout };
