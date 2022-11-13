import { FC, PropsWithChildren, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header, Main } from '@/components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export { Layout };
