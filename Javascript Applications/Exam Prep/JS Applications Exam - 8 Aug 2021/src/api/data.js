import { del, get, post, put } from './api.js';

const endpoints = {
    getMyBooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    getAll: '/data/books?sortBy=_createdOn%20desc',
    getById: '/data/books/',
    create: '/data/books',
    edit: '/data/books/',
    delete: '/data/books/',
};

export async function getAll() {
    return get(endpoints.getAll);
}

export async function getMyBooks(id) {
    return get(endpoints.getMyBooks(id));
}

export async function getById(id) {
    return get(endpoints.getById + id);
}

export async function createBook(data) {
    return post(endpoints.create, data);
}

export async function editBook(id, data) {
    return put(endpoints.edit + id, data);
}

export async function deleteBook(id) {
    return del(endpoints.delete + id);
}
