import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    getById: '',
    create: '',
    edit: '',
    delete: '',
};

export async function getAllPets() {
    return get(endpoints.getAll);
}

export async function getPostById(id) {
    return get('/data/posts/' + id);
}

export async function createPost(data) {
    return post('/data/posts', data);
}

export async function editPost(id, data) {
    return put('/data/posts/' + id, data);
}

export async function deletePost(id) {
    return del('/data/posts/' + id);
}
