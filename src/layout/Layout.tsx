import { FC, PropsWithChildren } from 'react';
import { Footer, Header, Main } from '@/components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export { Layout };
