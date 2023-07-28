import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/cars?sortBy=_createdOn%20desc',
    getById: '/data/cars/',
    create: '/data/cars',
    edit: '/data/cars/',
    delete: '/data/cars/',
    search: (query) => `/data/albums?where=name%20LIKE%20%22${query}%22`,
};

export async function getAll() {
    return get(endpoints.getAll);
}

export async function getMyTheaters(id) {
    return get(endpoints.getMyTheaters(id));
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

export async function searchItem(query) {
    return get(endpoints.search(query));
}
