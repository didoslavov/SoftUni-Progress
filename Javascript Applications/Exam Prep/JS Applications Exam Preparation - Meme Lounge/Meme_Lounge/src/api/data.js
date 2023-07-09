import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/memes?sortBy=_createdOn%20desc',
    getByUser: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    getById: '/data/memes/',
    create: '/data/memes',
    edit: '/data/memes/',
    delete: '/data/memes/',
};

export async function getAll() {
    return get(endpoints.getAll);
}

export async function getById(id) {
    return get(endpoints.getById + id);
}

export async function create(data) {
    return post(endpoints.create, data);
}

export async function edit(id, data) {
    return put(endpoints.edit + id, data);
}

export async function deleteById(id) {
    return del(endpoints.delete + id);
}

export async function getByUserId(userId) {
    return get(endpoints.getByUser(userId));
}
