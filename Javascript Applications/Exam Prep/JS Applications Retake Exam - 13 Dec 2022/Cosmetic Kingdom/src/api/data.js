import * as api from './api.js';

const login = api.login;
const register = api.register;
const logout = api.logout;

const endpoints = {
  allProducts: '/data/products?sortBy=_createdOn%20desc',
};

export async function getAllProducts() {
  return api.get(endpoints.allProducts);
}
