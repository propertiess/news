import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postSlice, postsSlice } from './slices';

export const rootReducer = combineReducers({
  idPosts: postsSlice.reducer,
  post: postSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
