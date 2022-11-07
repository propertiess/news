import { bindActionCreators } from '@reduxjs/toolkit';
import { postsSlice } from '../slices';
import { fetchIdPosts } from '../slices/posts.actions';
import { useAppDispatch } from './useAppDispatch';

const allActions = {
  ...postsSlice.actions,
  fetchIdPosts
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};
