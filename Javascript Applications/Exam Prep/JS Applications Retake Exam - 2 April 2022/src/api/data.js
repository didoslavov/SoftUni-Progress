import { del, get, post, put } from './api.js';

const endpoints = {
    getAll: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    getById: '/data/pets/',
    create: '/data/pets',
    edit: '',
    delete: '',
};

export async function getAllPets() {
    return get(endpoints.getAll);
}

export async function getPetById(id) {
    return get(endpoints.getById + id);
}

export async function createPet(data) {
    return post(endpoints.create, data);
}

export async function editPost(id, data) {
    return put('/data/posts/' + id, data);
}

export async function deletePost(id) {
    return del('/data/posts/' + id);
}
