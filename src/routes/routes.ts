import { IRoute } from '@/interfaces/route.interface';
import { Home, Post } from '@/pages';

export const routes: IRoute[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/post/:id',
    component: Post
  }
];
