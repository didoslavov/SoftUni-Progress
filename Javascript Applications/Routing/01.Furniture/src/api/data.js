import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
  all: '/data/catalog',
  byId: '/data/catalog/',
  myFurnitures: (userId) => `/data/catalog?where=_ownerId%3D%22${userId}%22`,
  create: '/data/catalog',
  edit: '/data/catalog/',
  delete: '/data/catalog/',
};

export async function getAllFurniture() {
  return api.get(endpoints.all);
}

export async function getFurnitureById(id) {
  return api.get(endpoints.byId + id);
}

export async function getMyFurnitures(userId) {
  return api.get(endpoints.myFurnitures(userId));
}

export async function createFurniture(data) {
  return api.post(endpoints.create, data);
}

export async function editFurniture(id, data) {
  return api.put(endpoints.edit + id, data);
}

export async function deleteFurniture(id) {
  return api.del(endpoints.delete + id);
}
