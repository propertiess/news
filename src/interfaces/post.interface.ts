export interface IPost {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: TypeOfItem;
  url: string;
}

export type TypeOfItem = 'story' | 'job' | 'comment' | 'poll' | 'pollopt';
