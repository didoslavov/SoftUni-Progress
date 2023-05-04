import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
  allProducts: '/data/products?sortBy=_createdOn%20desc',
  addProduct: '/data/products',
  productById: '/data/products/',
  deleteProduct: '/data/products/',
  editProduct: '/data/products/',
  buyProduct: '/data/bought',
  totalBoughtProducts: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
  boughtProductsByUserId: (productId, userId) =>
    `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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

export async function editProduct(product, id) {
  return api.put(endpoints.editProduct + id, product);
}

export async function buyProduct(id) {
  return api.post(endpoints.buyProduct, id);
}

export async function productTotalBoughtCount(id) {
  return api.get(endpoints.totalBoughtProducts(id));
}

export async function getMyBoughtProductsByUserId(userId, productId) {
  return api.get(endpoints.boughtProductsByUserId(userId, productId));
}
