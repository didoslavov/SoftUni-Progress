export interface Theme {
  _id: string;
  subscribers: string[];
  posts: string[];
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  themes: string[];
  posts: string[];
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
  updatedAt: string;
}
