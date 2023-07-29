import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    getById: '/data/cars/',
    myListings: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    create: '/data/cars',
    edit: '/data/cars/',
    delete: '/data/cars/',
    search: (query) => `/data/cars?where=year%3D${query}`,
};

export async function searchItem(query) {
    return get(endpoints.search(query));
}

export async function getAll() {
    return get(endpoints.getAll);
}

export async function getMyListings(id) {
    return get(endpoints.myListings(id));
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

export async function deleteItem(id) {
    return del(endpoints.delete + id);
}
