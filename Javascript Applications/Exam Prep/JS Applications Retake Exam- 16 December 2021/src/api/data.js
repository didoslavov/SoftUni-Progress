import { del, get, post, put } from './api.js';

const endpoints = {
    getMyTheaters: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    getAll: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    getById: '/data/theaters/',
    create: '/data/theaters',
    edit: '/data/theaters/',
    delete: '/data/theaters/',
    like: '/data/likes',
    allLikes: (theaterId) => `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    userHasLiked: (theaterId, userId) =>
        `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
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

export async function createTheater(data) {
    return post(endpoints.create, data);
}

export async function editTheater(id, data) {
    return put(endpoints.edit + id, data);
}

export async function deleteTheater(id) {
    return del(endpoints.delete + id);
}

export async function getAllLikes(id) {
    return get(endpoints.allLikes(id));
}

export async function like(theaterId) {
    return post(endpoints.like, theaterId);
}

export async function userHasLiked(theaterId, userId) {
    return get(endpoints.userHasLiked(theaterId, userId));
}
