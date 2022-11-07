import { IPost } from '@/interfaces/post.interface';
import { instance } from './instance';

export const PostService = {
  async fetchIdPosts() {
    return await instance.get<number[]>('/newstories.json');
  },

  async fetchPost(id: number) {
    return await instance.get<IPost>(`/item/${id}.json`);
  }
};
