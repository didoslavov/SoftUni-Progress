import { User } from './user';

export interface Theme {
  _id: string;
  subscribers: string[];
  posts: string[];
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
