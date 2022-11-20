import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostService } from '@/services';

export const fetchIdPosts = createAsyncThunk(
  'fetch-id-posts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await PostService.fetchIdPosts();
      return data.slice(0, 100);
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);

export const fetchPost = createAsyncThunk(
  'fetch-post',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await PostService.fetchPost(id);
      return data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(err as Error);
    }
  }
);

export const fetchCommentsPost = createAsyncThunk(
  'fetch-comments',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await PostService.fetchPost(id);
      return { kids: data.kids, descendants: data.descendants };
    } catch (err) {
      return rejectWithValue(err as Error);
    }
  }
);
