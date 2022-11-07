import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostService } from '@/services/post.service';

export const fetchIdPosts = createAsyncThunk('fetch-id-posts', async () => {
  const { data } = await PostService.fetchIdPosts();

  return data.slice(0, 30);
});
