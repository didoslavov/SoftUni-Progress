import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllAlbum() {
  return await api.get('/data/albums?sortBy=_createdOn%20desc');
}

export async function getAlbumById(id) {
  return await api.get('/data/albums/' + id);
}

export async function getAlbumLikes(albumId) {
  return await api.get(`/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`);
}

export async function likeAlbum(id) {
  return await api.post('/data/likes', id);
}

export async function deleteEvent(id) {
  await api.del('/data/albums/' + id);
}
