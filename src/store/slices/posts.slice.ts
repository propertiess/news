import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchIdPosts } from './post.actions';

interface IState {
  idPosts: number[];
  loading: boolean;
  error: Error | null;
}

const initialState: IState = { loading: true, error: null } as IState;

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIdPosts.pending, state => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(
        fetchIdPosts.fulfilled,
        (state, action: PayloadAction<number[]>) => {
          return (state = {
            loading: false,
            error: null,
            idPosts: action.payload
          });
        }
      ),
      builder.addCase(
        fetchIdPosts.rejected,
        (state, action: PayloadAction<Error | any>) => {
          state.loading = false;
          state.error = new Error(action.payload?.message);
        }
      );
  }
});
