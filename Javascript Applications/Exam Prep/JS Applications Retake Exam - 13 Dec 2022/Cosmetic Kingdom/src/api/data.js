import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
  allProducts: '/data/products?sortBy=_createdOn%20desc',
  addProduct: '/data/products',
  productById: '/data/products/',
  deleteProduct: '/data/products/',
};

export async function getAllProducts() {
  return api.get(endpoints.allProducts);
}

export async function addProduct(product) {
  return api.post(endpoints.addProduct, product);
}

export async function getProductById(id) {
  return api.get(endpoints.productById + id);
}

export async function deleteProduct(id) {
  return api.del(endpoints.deleteProduct + id);
}
