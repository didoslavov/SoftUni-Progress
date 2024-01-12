import { User } from './User';

export interface Theme {
  _id: string;
  subscribers: string[];
  posts: string[];
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
}
