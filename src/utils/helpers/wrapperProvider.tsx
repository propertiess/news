import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

export const wrapperProvider = ({
  children
}: PropsWithChildren<{}>): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
