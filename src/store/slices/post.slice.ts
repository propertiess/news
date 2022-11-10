import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost } from '@/interfaces/post.interface';
import { fetchCommentsPost, fetchIdPosts, fetchPost } from './post.actions';

interface IState {
  post: IPost;
  loading: boolean;
  loadingComments: boolean;
  error: Error | null;
}

const initialState: IState = {
  loading: true,
  error: null,
  loadingComments: true
} as IState;

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPost.pending, state => {
      state.loading = true;
      state.loadingComments = true;
      state.error = null;
    }),
      builder.addCase(
        fetchPost.fulfilled,
        (state, action: PayloadAction<IPost>) => {
          return (state = {
            loading: false,
            error: null,
            post: action.payload,
            loadingComments: false
          });
        }
      ),
      builder.addCase(
        fetchIdPosts.rejected,
        (state, action: PayloadAction<Error | any>) => {
          state.loading = false;
          state.loadingComments = false;
          state.error = new Error(action.payload?.message);
        }
      ),
      builder.addCase(fetchCommentsPost.pending, state => {
        state.loadingComments = true;

        state.error = null;
      }),
      builder.addCase(
        fetchCommentsPost.fulfilled,
        (state, action: PayloadAction<number[]>) => {
          state.error = null;
          state.loadingComments = false;
          state.post.kids = action.payload;
        }
      ),
      builder.addCase(
        fetchCommentsPost.rejected,
        (state, action: PayloadAction<Error | any>) => {
          state.loadingComments = false;
          state.error = new Error(action.payload?.message);
        }
      );
  }
});
