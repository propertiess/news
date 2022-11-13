import { bindActionCreators } from '@reduxjs/toolkit';
import { postsSlice, scrollSlice } from '../slices';
import {
  fetchCommentsPost,
  fetchIdPosts,
  fetchPost
} from '../slices/post.actions';
import { useAppDispatch } from './useAppDispatch';

const allActions = {
  ...postsSlice.actions,
  ...scrollSlice.actions,
  fetchIdPosts,
  fetchPost,
  fetchCommentsPost
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};
