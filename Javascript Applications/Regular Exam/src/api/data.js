import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/facts?sortBy=_createdOn%20desc',
    getById: '/data/facts/',
    create: '/data/facts',
    edit: '/data/facts/',
    delete: '/data/facts/',
    like: '/data/likes',
    totalLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    hasLiked: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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

export async function like(factId) {
    return post(endpoints.like, { factId });
}

export async function getTotalLikes(factId) {
    return get(endpoints.totalLikes(factId));
}

export async function userHasLiked(factId, userId) {
    return get(endpoints.hasLiked(factId, userId));
}
