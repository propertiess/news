import { IComment } from '@/interfaces/comment.interface';
import { instance } from './instance';

export const CommentService = {
  async fetchComment(id: number) {
    return await instance.get<IComment>(`/item/${id}.json`);
  }
};
