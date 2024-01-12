import { Theme } from './theme';
import { User } from './user';

type ThemeWithUserIdAsString = {
  [K in keyof Theme]: K extends 'userId' ? string : Theme[K];
};

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: User;
  themeId: ThemeWithUserIdAsString;
  created_at: string;
  updatedAt: string;
  __v: number;
}
