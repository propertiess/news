import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostService } from '@/services/post.service';

export const fetchIdPosts = createAsyncThunk('fetch-id-posts', async () => {
  const { data } = await PostService.fetchIdPosts();

  return data.slice(0, 100);
});

export const fetchPost = createAsyncThunk('fetch-post', async (id: number) => {
  const { data } = await PostService.fetchPost(id);

  return data;
});

export const fetchCommentsPost = createAsyncThunk(
  'fetch-comments',
  async (id: number) => {
    const { data } = await PostService.fetchPost(id);
    return data.kids;
  }
);
