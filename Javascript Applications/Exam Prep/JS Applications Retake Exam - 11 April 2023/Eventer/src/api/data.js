import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllEvents() {
  return await api.get('/data/events?sortBy=_createdOn%20desc');
}
