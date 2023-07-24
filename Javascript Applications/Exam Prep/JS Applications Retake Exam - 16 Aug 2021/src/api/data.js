import { del, get, post, put } from './api.js';

const endpoints = {
    getRecent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    getAll: '/data/games?sortBy=_createdOn%20desc',
    getById: '/data/games/',
    create: '/data/games',
    edit: '/data/games/',
    delete: '/data/games/',
    createComment: '/data/comments',
    allComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
};

export async function getAll() {
    return get(endpoints.getAll);
}

export async function getRecent() {
    return get(endpoints.getRecent);
}

export async function getById(id) {
    return get(endpoints.getById + id);
}

export async function createGame(data) {
    return post(endpoints.create, data);
}

export async function editGame(id, data) {
    return put(endpoints.edit + id, data);
}

export async function deleteGame(id) {
    return del(endpoints.delete + id);
}

export async function createComment(data) {
    return post(endpoints.createComment, data);
}

export async function getTotalComments(gameId) {
    return get(endpoints.allComments(gameId));
}
