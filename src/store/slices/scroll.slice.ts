import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface State {
  postsTop: number;
  currRenderedPostsCount: number;
  shouldRendered: number;
}

const initialState: State = {
  postsTop: 0,
  currRenderedPostsCount: 0,
  shouldRendered: 10
};

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    incrementRenderedPosts: state => {
      state.currRenderedPostsCount += 1;
    },
    decrementRenderedPosts: state => {
      state.currRenderedPostsCount -= 1;
    },
    setTop: (state, action: PayloadAction<number>) => {
      state.postsTop = action.payload;
    },
    setShouldRendered: (state, action: PayloadAction<number>) => {
      state.shouldRendered = action.payload;
    }
  }
});
