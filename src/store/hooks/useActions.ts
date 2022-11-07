import { bindActionCreators } from '@reduxjs/toolkit';
import { useAppDispatch } from './useAppDispatch';

const allActions = {};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};
