import {
  PreloadedState,
  combineReducers,
  configureStore
} from '@reduxjs/toolkit';
import { postSlice, postsSlice, scrollSlice } from './slices';

export const rootReducer = combineReducers({
  idPosts: postsSlice.reducer,
  post: postSlice.reducer,
  scroll: scrollSlice.reducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false })
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const store = setupStore();
