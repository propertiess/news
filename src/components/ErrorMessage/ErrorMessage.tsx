import { FC } from 'react';

interface Props {
  message: string;
}

const ErrorMessage: FC<Props> = ({ message }) => {
  return <span className='block p-1 text-red-500 font-medium'>{message}</span>;
};

export { ErrorMessage };
