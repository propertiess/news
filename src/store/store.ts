import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postSlice, postsSlice, scrollSlice } from './slices';

export const rootReducer = combineReducers({
  idPosts: postsSlice.reducer,
  post: postSlice.reducer,
  scroll: scrollSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
