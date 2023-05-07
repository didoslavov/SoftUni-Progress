import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllPosts() {
  return await api.get('/data/albums?sortBy=_createdOn%20desc');
}
