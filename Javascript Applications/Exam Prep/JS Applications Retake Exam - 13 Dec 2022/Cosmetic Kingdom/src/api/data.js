import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
  allProducts: '/data/products?sortBy=_createdOn%20desc',
};

export async function getAllProducts() {
  return api.get(endpoints.allProducts);
}
